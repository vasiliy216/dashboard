import { Axios } from "../../../core";

export default {
  upload: file => {
    const formData = new FormData();
    formData.append("file", file);
    return Axios.post("/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};