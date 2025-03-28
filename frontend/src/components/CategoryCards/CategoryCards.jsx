import React from "react";
import "./CategoryCards.css";

const categories = [
    { title: "New & Featured", image: "/images/category-new.jpg" },
    { title: "Deals", image: "/images/category-deals.jpg" },
    { title: "Pickup & Delivery", image: "/images/category-pickup.jpg" },
    { title: "Registry & Lists", image: "/images/category-registry.jpg" },
];

function CategoryCards() {
    return (
        <div className="category-cards">
            {categories.map((cat, idx) => (
                <div className="category-card" key={idx}>
                    <img src={cat.image} alt={cat.title} />
                    <span>{cat.title}</span>
                </div>
            ))}
        </div>
    );
}

export default CategoryCards;
