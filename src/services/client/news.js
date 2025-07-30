import axiosInstance from "../../config/axios";

export const getAllNews = async () =>{
    try {
        const response = await axiosInstance.get('/news');
        console.log("Response data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
}