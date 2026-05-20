import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3001/api/v1",
});

export const loginUser = async (data) => {

    const response = await API.post(
        "/auth/login",
        data
    );

    return response.data;
}