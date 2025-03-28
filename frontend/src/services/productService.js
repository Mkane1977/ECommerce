const API_URL = "http://localhost:4000/api/products";  // API Gateway endpoint

export const getProducts = async () => {
    const response = await fetch(API_URL);
    return response.json();
};
