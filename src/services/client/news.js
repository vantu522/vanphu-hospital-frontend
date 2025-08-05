import axiosInstance from "../../config/axios";

const toFormData = (data) => {
  const form = new FormData();

  for (const key in data) {
    const value = data[key];

    if (key === "images" && Array.isArray(value)) {
      value.forEach((file) => {
        form.append("images", file);
      });
    } else if (Array.isArray(value)) {
      // ✅ append từng phần tử mảng với key[] để backend nhận đúng
      value.forEach((item) => {
        form.append(`${key}[]`, item);
      });
    } else {
      form.append(key, value);
    }
  }

  return form;
};

export const getAllNews = async () =>{
    try {
        const response = await axiosInstance.get('/news');
        console.log("Response data:", response.data);
        return response.data?.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
}

export const createNews = async (newsData) => {
    try {
        const form = toFormData(newsData)
        const response = await axiosInstance.post('/news', form);
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
        const form = toFormData(newsData)
        const response = await axiosInstance.put(`/news/${id}`, form);
        return response.data;
    } catch (error) {
        console.error("Error updating news:", error);
        throw error;
    }
}