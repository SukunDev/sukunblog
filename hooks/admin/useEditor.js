import React, { useEffect, useRef, useState } from "react";

export const config = {
  extraPlugins: [MyCustomUploadAdapterPlugin],
  link: {
    decorators: {
      openInNewTab: {
        mode: "manual",
        label: "Open in a new tab",
        attributes: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    },
  },
};

function useEditor({ onChange }) {
  const editorRef = useRef();
  const { CKEditor, customBuildCKEditor } = editorRef.current || {};
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      customBuildCKEditor: require("../../ckeditor5/build/ckeditor"),
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleOnChange = (event, editor) => {
    const data = editor.getData();
    const cleanCode = data
      .replace(/<(?:.|\n)*?>/gm, "")
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace("&nbsp;", "");
    setWordCount(cleanCode.trim().split(" ").length);
    setCharacterCount(cleanCode.trim().length);
    onChange({ target: { name: "content", value: data } });
  };

  const handleOnReady = (editor) => {
    const data = editor.getData();
    if (data) {
      const cleanCode = data
        .replace(/<(?:.|\n)*?>/gm, "")
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace("&nbsp;", "");
      setWordCount(cleanCode.trim().split(" ").length);
      setCharacterCount(cleanCode.trim().length);
    }
    editor.editing.view.change((writer) => {
      writer.setStyle(
        "min-height",
        "100vh",
        editor.editing.view.document.getRoot()
      );
    });
  };

  return {
    handleOnChange,
    handleOnReady,
    CKEditor,
    customBuildCKEditor,
    wordCount,
    characterCount,
    isLoading,
  };
}

export default useEditor;

export function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  constructor(props) {
    // CKEditor 5's FileLoader instance.
    this.loader = props;
    // URL where to send files.
    this.url = `${process.env.NEXT_PUBLIC_URL}/api/upload-image`;
  }

  // Starts the upload process.
  upload() {
    return new Promise((resolve, reject) => {
      this._initRequest();
      this._initListeners(resolve, reject);
      this._sendRequest();
    });
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());
    xhr.open("POST", this.url, true);
    xhr.responseType = "json";
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = "Couldn't upload file:" + ` ${loader.file.name}.`;

    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject());
    xhr.addEventListener("load", () => {
      const response = xhr.response;
      console.log(response);
      if (!response || !response.success) {
        return reject(
          response && !response.success ? response.message : genericErrorText
        );
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      resolve({
        default: `${response.result}`,
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest() {
    const data = new FormData();

    this.loader.file.then((result) => {
      data.append("file", result);
      this.xhr.send(data);
    });
  }
}
