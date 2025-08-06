import axiosInstance from "../../config/axios";

const toFormData = (data) => {
  const form = new FormData();

  for (const key in data) {
    const value = data[key];

    if (key === "document" && value instanceof File) {
      form.append("document", value);
    } else if (Array.isArray(value)) {
      value.forEach((item) => {
        form.append(`${key}[]`, item);
      });
    } else {
      form.append(key, value);
    }
  }

  return form;
};

export const getAllRecruitments = async () => {
  try {
    const response = await axiosInstance.get('/recruitments');
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching recruitments:", error);
    throw error;
  }
};

export const getRecruitmentById = async (id) => {
  try {
    const response = await axiosInstance.get(`/recruitments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recruitment by id:", error);
    throw error;
  }
};

export const createRecruitment = async (recruitmentData) => {
  try {
    const form = toFormData(recruitmentData);
    const response = await axiosInstance.post('/recruitments', form);
    return response.data;
  } catch (error) {
    console.error("Error creating recruitment:", error);
    throw error;
  }
};

export const updateRecruitment = async (id, recruitmentData) => {
  try {
    const form = toFormData(recruitmentData);
    const response = await axiosInstance.put(`/recruitments/${id}`, form);
    return response.data;
  } catch (error) {
    console.error("Error updating recruitment:", error);
    throw error;
  }
};

export const deleteRecruitment = async (id) => {
  try {
    const response = await axiosInstance.delete(`/recruitments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting recruitment:", error);
    throw error;
  }
};

export const getRecruitmentBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/recruitments/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    throw error;
  }
};  


