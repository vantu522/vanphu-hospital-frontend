import axiosInstance from "../../config/axios";

// Helper để chuyển doctorData thành FormData
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

export const getDoctorsBySpecialty = async (specialtyId) => {
  try {
    const response = await axiosInstance.get(`/doctors/specialty/${specialtyId}`);
    return response.data.doctors; // Trả về mảng doctors từ response
  } catch (error) {
    console.error("Error fetching doctors by specialty:", error);
    throw error;
  }
};
