import axiosInstance from "../../config/axios";


export const getAllDoctors = async () => {
  try {
    const response = await axiosInstance.get('/doctors');
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
}
