import axiosInstance from "../../config/axios";


export const getAllSpecialties = async () => {
  try {
    const response = await axiosInstance.get('/specialties');
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    throw error;
  }
}