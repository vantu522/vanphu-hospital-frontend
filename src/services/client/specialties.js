import axiosInstance from "../../config/axios";

// Helper chuyển dữ liệu sang FormData
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


export const getAllSpecialties = async () => {
  try {
    const response = await axiosInstance.get("/specialties");
    return response.data?.data;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    throw error;
  }
};

export const createSpecialty = async (data) => {
  try {
    const form = toFormData(data);
    const response = await axiosInstance.post("/specialties", form);
    return response.data;
  } catch (error) {
    console.error("Error creating specialty:", error);
    throw error;
  }
};

export const updateSpecialty = async (id, data) => {
  try {
    const form = toFormData(data);
    const response = await axiosInstance.put(`/specialties/${id}`, form);
    return response.data;
  } catch (error) {
    console.error("Error updating specialty:", error);
    throw error;
  }
};

export const deleteSpecialty = async (id) => {
  try {
    const response = await axiosInstance.delete(`/specialties/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting specialty:", error);
    throw error;
  }
};

export const getSpecialtyBySlug = async (slug) =>{
  try{
    const response = await axiosInstance.get(`/specialties/slug/${slug}`);
    return response.data;
  } catch (error){
    console.error("Error slug",error);
    throw error;
  }
}
