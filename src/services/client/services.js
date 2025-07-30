import axios from "axios";
import axiosInstance from "../../config/axios";


export const getAllServices = async () => {
  try {
    const response = await axiosInstance.get('/services');
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
} 