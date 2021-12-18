import { Axios } from "../../../core";

export default {
  upload: (file, width, height) => {
    const formData = new FormData();
    formData.append("file", file);
    return Axios.post("/file?w=" + width + "&h=" + height, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};