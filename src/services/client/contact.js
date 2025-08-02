import axiosInstance from "../../config/axios";


export const getAllContacts = async () => {
  try {
    const response = await axiosInstance.get('/contacts');
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
}

export const createContact = async (contactData) => {
  try {
    const response = await axiosInstance.post('/contacts', contactData);
    return response.data;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
}

export const deleteContact = async (id) => {
  try {
    const response = await axiosInstance.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
}