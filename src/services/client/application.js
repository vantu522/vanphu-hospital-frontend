import axiosInstance from "../../config/axios";

const toFormData = (data) => {
  const form = new FormData();

  for (const key in data) {
    const value = data[key];

    if (key === "cvFileUrl" && value instanceof File) {
      form.append("cvFileUrl", value);
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

export const getAllApplications = async () => {
  try {
    const response = await axiosInstance.get("/applications");
    console.log("Response data:", response.data);
    return response.data?.applications;
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

export const createApplication = async (applicationData) => {
  try {
    const form = toFormData(applicationData);
    const response = await axiosInstance.post("/applications", form);
    return response.data?.application;
  } catch (error) {
    console.error("Error creating recruitment:", error);
    throw error;
  }
};

export const updateApplication = async (id, applicationData) => {
  try {
    const form = toFormData(applicationData);
    const response = await axiosInstance.put(`/applications/${id}`, form);
    return response.data.application;
  } catch (error) {
    console.error("Error updating recruitment:", error);
    throw error;
  }
};

export const deleteApplication = async (id) => {
  try {
    const response = await axiosInstance.delete(`/applications/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting recruitment:", error);
    throw error;
  }
};

export const downloadCV = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/applications/${id}/download-cv`,
      {
        responseType: "blob", // rất quan trọng để nhận file nhị phân
      }
    );

    // Tạo URL cho Blob
    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);

    // Tạo thẻ <a> để tải file
    const link = document.createElement("a");
    link.href = url;

    // Lấy tên file từ header nếu có, nếu không set mặc định
    let fileName = "CV.pdf";
    const contentDisposition = response.headers["content-disposition"];
    if (contentDisposition) {
      const match = contentDisposition.match(/filename="?([^"]+)"?/);
      if (match && match[1]) {
        fileName = decodeURIComponent(match[1]); // giải mã nếu có ký tự đặc biệt
      }
    }

    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();

    // Dọn dẹp
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Lỗi khi tải CV:", error);
    throw error;
  }
};
