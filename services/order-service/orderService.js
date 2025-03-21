import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/orders";

export const placeOrder = async (orderData) => {
    try {
        const response = await axios.post(API_BASE_URL, orderData);
        return response.data;
    } catch (error) {
        console.error("Error placing order:", error);
        throw error;
    }
};
