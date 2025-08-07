import axiosInstance from "../../config/axios";
export const getAllBanners = async () => {
  try {
    const response = await axiosInstance.get("/background-banners");
    return response.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
}




