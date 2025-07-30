import axiosInstance from "../../config/axios";

export const getAllRecruitments = async () => {
  try {
    const response = await axiosInstance.get('/recruitments');
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching recruitments:", error);
    throw error;
  }
}