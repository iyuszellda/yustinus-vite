import axios from "axios";

const ProductApi = axios.create({
    // baseURL: "https://api.escuelajs.co/api/v1",
    baseURL: "https://api-product-i6yy.onrender.com/api/v1",
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default ProductApi;
