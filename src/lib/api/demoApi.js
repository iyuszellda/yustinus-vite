import axios from "axios";

const demoApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default demoApi;
