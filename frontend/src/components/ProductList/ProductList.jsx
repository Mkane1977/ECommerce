import React, { useEffect, useState } from "react";
import "./ProductList.css"; // Import your CSS styling

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Use the API Gateway endpoint so that all requests go through the gateway
        fetch("http://localhost:4000/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
