import axiosInstance from "../../config/axios";

// Helper để chuyển doctorData thành FormData
const toFormData = (doctorData) => {
  const form = new FormData();

  for (const key in doctorData) {
    const value = doctorData[key];

    if (Array.isArray(value)) {
      value.forEach((item) => {
        form.append(key, item);
      });
    } else if (value !== undefined && value !== null) {
      form.append(key, value);
    }
  }

  return form;
};

export const getAllDoctors = async () => {
  try {
    const response = await axiosInstance.get("/doctors");
    return response.data;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

export const createDoctor = async (doctorData) => {
  try {
    const form = toFormData(doctorData);
    const response = await axiosInstance.post("/doctors", form);
    return response.data;
  } catch (error) {
    console.error("Error creating doctor:", error);
    throw error;
  }
};

export const updateDoctor = async (id, doctorData) => {
  try {
    const form = toFormData(doctorData);
    const response = await axiosInstance.put(`/doctors/${id}`, form);
    return response.data;
  } catch (error) {
    console.error("Error updating doctor:", error);
    throw error;
  }
};

export const deleteDoctor = async (id) => {
  try {
    const response = await axiosInstance.delete(`/doctors/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting doctor:", error);
    throw error;
  }
};

export const getDoctorBySlug = async (slug) =>{
  try{
    const response = await axiosInstance.get(`/doctors/slug/${slug}`);
    return response.data;
  } catch (error){
    console.error("lỖI KHI LẤY RA BÁC SĨ", error)
    throw error;
  }
}
