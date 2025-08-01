import axiosInstance from "../../config/axios";

// Helper để chuyển serviceData thành FormData
const toFormData = (serviceData) => {
  const form = new FormData();

  for (const key in serviceData) {
    if (key === "images" && Array.isArray(serviceData[key])) {
      serviceData[key].forEach((file) => {
        form.append("images", file);
      });
    } else if (key === "avatar" && serviceData[key]) {
      form.append("avatar", serviceData[key]);
    } else {
      form.append(key, serviceData[key]);
    }
  }

  return form;
};

export const getAllServices = async () => {
  try {
    const response = await axiosInstance.get('/services');
    return response.data;
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
