import axios from "axios";

const demoApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default demoApi;
