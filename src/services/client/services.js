import axios from "axios";
import axiosInstance from "../../config/axios";


export const getAllServices = async () => {
  try {
    const response = await axiosInstance.get('/services');
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}

export const createService = async (serviceData) => {
  try {
    const response = await axiosInstance.post('/services', serviceData);
    return response.data;
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
}

export const deleteService = async (id) => {
  try {
    const response = await axiosInstance.delete(`/services/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting service:", error);
    throw error;
  }
}

export const updateService = async (id, serviceData) => {
  try {
    const response = await axiosInstance.put(`/services/${id}`, serviceData);
    return response.data;
  } catch (error) {
    console.error("Error updating service:", error);
    throw error;
  }
}