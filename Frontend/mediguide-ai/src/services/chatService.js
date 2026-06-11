import axios from "axios";

import API_URL from "../config/apiConfig";

export const sendChatMessage =
  async (message) => {
    const response =
      await axios.post(
        `${API_URL}/api/chat`,
        {
          message,
        }
      );

    return response.data.response;
  };