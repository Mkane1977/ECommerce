import React, { useEffect, useState } from "react";
import "./ProductGrid.css";

function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //  product data  via the gateway:
        fetch("http://localhost:4000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="product-grid">
            {products.map((p) => (
                <div className="product-item" key={p.id}>
                    <img
                        src="/images/placeholder.png"
                        alt={p.name}
                        className="product-image"
                    />
                    <h3>{p.name}</h3>
                    <p>${p.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
