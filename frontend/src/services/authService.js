// src/services/authService.js

const API_BASE_URL = "http://localhost:4000/authentication"; // API Gateway URL for authentication

export async function login(username, password) {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

export async function signup(username, password) {
    const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

export async function fetchProfile(token) {
    const response = await fetch(`${API_BASE_URL}/profile`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
}
