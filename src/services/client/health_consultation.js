import axiosInstance from "../../config/axios";

// Helper để chuyển dữ liệu sang FormData (cho hình ảnh)
const toFormData = (data) => {
  const form = new FormData();

  for (const key in data) {
    const value = data[key];

    if (key === "image" && value instanceof File) {
      // Nếu là file ảnh, append trực tiếp
      form.append("image", value);
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

// Lấy tất cả health consultations
export const getAllHealthConsultations = async () => {
  try {
    const response = await axiosInstance.get("/health-consultations");
    return response.data?.data;
  } catch (error) {
    console.error("Error fetching health consultations:", error);
    throw error;
  }
};

// Tạo mới health consultation
export const createHealthConsultation = async (data) => {
  try {
    const form = toFormData(data);
    const response = await axiosInstance.post("/health-consultations", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating health consultation:", error);
    throw error;
  }
};

// Cập nhật health consultation
export const updateHealthConsultation = async (id, data) => {
  try {
    const form = toFormData(data);
    const response = await axiosInstance.put(`/health-consultations/${id}`, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating health consultation:", error);
    throw error;
  }
};

// Xóa health consultation
export const deleteHealthConsultation = async (id) => {
  try {
    const response = await axiosInstance.delete(`/health-consultations/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting health consultation:", error);
    throw error;
  }
};

// Lấy health consultation theo slug
export const getHealthConsultationBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/health-consultations/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching health consultation by slug:", error);
    throw error;
  }
};
