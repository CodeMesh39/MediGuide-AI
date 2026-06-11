import axios from "axios";
import API_URL from "../config/apiConfig";

export const checkEmergency =
  async (symptoms) => {
    const response =
      await axios.post(
        `${API_URL}/api/emergency/check`,
        {
          symptoms,
        }
      );

    return response.data.result;
  };