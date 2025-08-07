import axiosInstance from "../../config/axios";

export const getInformation = async () => {
    try {
        const response = await axiosInstance.get("/informations");
        return response.data;
    } catch (error) {
        console.error("Error fetching information:", error);
        throw error;
    }
    }

export const createInformation = async (informationData) => {
    try {
        const response = await axiosInstance.post("/informations", informationData);
        return response.data;
    } catch (error) {
        console.error("Error creating information:", error);
        throw error;
    }
}

export const updateInformation = async (id, informationData) => {
    try {
        const response = await axiosInstance.put(`/informations/${id}`, informationData);
        return response.data;
    } catch (error) {
        console.error("Error updating information:", error);
        throw error;
    }
}

export const deleteInformation = async (id) => {
    try {
        const response = await axiosInstance.delete(`/information/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting information:", error);
        throw error;
    }
}

