import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function useThumbnail({ onChange, value }) {
  const [imageFiles, setImageFiles] = useState(value);

  const handleOnChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const response = await uploadThumbnails(event.target.files[0]);
      if (response.status) {
        setImageFiles(response.result);
        onChange({
          target: { name: "thumbnail", value: response.result },
        });
      } else {
        toast(response.message, { type: "error" });
      }
    }
  };

  const uploadThumbnails = async (files) => {
    try {
      let data = new FormData();
      data.append("thumbnail", files, files.name);
      const response = await axios.post(`/api/upload-thumbnails`, data, {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      });
      if (response.data.status) {
        return response.data;
      }
    } catch (error) {
      return { success: false, message: "something went wrong" };
    }
  };
  return {
    imageFiles,
    handleOnChange,
  };
}

export default useThumbnail;
