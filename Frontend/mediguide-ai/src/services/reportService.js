import axios from "axios";
import API_URL from "../config/apiConfig";

export const analyzeReport =
  async (file) => {
    const formData = new FormData();

    formData.append(
      "file",
      file
    );

    const response =
      await axios.post(
        `${API_URL}/api/report/analyze`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };