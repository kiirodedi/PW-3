import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000",
});

// Interceptor de resposta
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Erro na API:", error.response?.data || error.meessage);
        return Promise.reject(error);
    }
)