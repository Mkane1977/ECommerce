import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
    return (
        <div className="hero-banner">
            < img src ="/images/big-banner.jpg"
                alt="Big Deals"
                className="hero-image"
            />
            <div className="hero-text">
                <h1>BIG deals are here</h1>
                <p>Get started for free & find great deals, benefits & more.</p>
                <button className="shop-now-btn">Shop Now</button>
            </div>
        </div>
    );
}

export default HeroBanner;
