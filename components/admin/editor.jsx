import useEditor, { config } from "@/hooks/admin/useEditor";
import React from "react";

export default function Editor({ onChange, value, name }) {
  const {
    handleOnChange,
    handleOnReady,
    CKEditor,
    customBuildCKEditor,
    wordCount,
    characterCount,
    isLoading,
  } = useEditor({ onChange });

  return (
    <>
      {isLoading ? (
        <>
          <CKEditor
            name={name}
            editor={customBuildCKEditor}
            data={value}
            onChange={handleOnChange}
            onReady={handleOnReady}
            config={config}
          />
          <div className="flex justify-end gap-4 mr-2">
            <p>{characterCount} Characters</p>
            <p>{wordCount} Words</p>
          </div>
        </>
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
