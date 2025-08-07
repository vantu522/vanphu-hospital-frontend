import axiosInstance from "../../config/axios";

// Helper để chuyển serviceData thành FormData
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

export const getAllServices = async () => {
  try {
    const response = await axiosInstance.get('/services');
    // Kiểm tra nếu response có format { count, services } thì trả về services
    return response.data.services || response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const createService = async (serviceData) => {
  try {
    const form = toFormData(serviceData);
    const response = await axiosInstance.post('/services', form);
    return response.data;
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
};

export const getServiceBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/services/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    throw error;
  }
};  

export const updateService = async (id, serviceData) => {
  try {
    const form = toFormData(serviceData);
    const response = await axiosInstance.put(`/services/${id}`, form);
    return response.data;
  } catch (error) {
    console.error("Error updating service:", error);
    throw error;
  }
};

export const deleteService = async (id) => {
  try {
    const response = await axiosInstance.delete(`/services/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting service:", error);
    throw error;
  }
};

export const getServicesBySpecialty = async (specialtyId) => {
  try {
    const response = await axiosInstance.get(`/services/specialty/${specialtyId}`);
    return response.data.services; // Trả về mảng services từ response
  } catch (error) {
    console.error("Error fetching services by specialty:", error);
    throw error;
  }
};
