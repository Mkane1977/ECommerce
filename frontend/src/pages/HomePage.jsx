import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import ProductGrid from "../components/ProductGrid/ProductGrid";

function HomePage() {
    return (
        <div>
            <HeroBanner />
            <CategoryCards />
            <ProductGrid />
        </div>
    );
}

export default HomePage;
