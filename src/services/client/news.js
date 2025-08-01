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

export const createNews = async (newsData) => {
    try {
        const response = await axiosInstance.post('/news', newsData);
        return response.data;
    } catch (error) {
        console.error("Error creating news:", error);
        throw error;
    }
}

export const deleteNews = async (id) => {
    try {
        const response = await axiosInstance.delete(`/news/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting news:", error);
        throw error;
    }
}

export const updateNews = async (id, newsData) => {
    try {
        const response = await axiosInstance.put(`/news/${id}`, newsData);
        return response.data;
    } catch (error) {
        console.error("Error updating news:", error);
        throw error;
    }
}