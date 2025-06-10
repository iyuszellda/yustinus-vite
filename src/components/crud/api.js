export const API_URL = "https://api.escuelajs.co/api/v1/products";
export const PAGE_SIZE = 10;

export async function fetchProducts(offset = 0) {
    const res = await fetch(`${API_URL}?limit=${PAGE_SIZE}&offset=${offset}`);
    return res.json();
}

export async function createProduct(data) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
}

export async function updateProduct(id, data) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
}

export async function deleteProduct(id) {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
