import axiosInstance from "../../config/axios";


export const registerClient = async (clientData) => {
  try {
    const response = await axiosInstance.post("/customers/register", clientData);
    return response.data;
  } catch (error) {
    console.error("Error registering client:", error);
    throw error;
  }
}

export const loginClient = async (credentials) => {
  try {
    const response = await axiosInstance.post("/customers/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in client:", error);
    throw error;
  }
}