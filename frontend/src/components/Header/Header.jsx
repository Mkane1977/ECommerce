import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src="/images/logo.png" alt="Logo" className="logo" />
                <span className="site-title">Target Clone</span>
            </div>
            <div className="header-right">
                {/* Login button with icon and text */}
                <button className="sign-in-btn">
                    <div className="login-btn-content">
                        <img src="/images/login.png" alt="Sign In" className="icon" />
                        <span className="login-text">Login</span>
                    </div>
                </button>
                {/* Cart button with just the icon */}
                <button className="cart-btn">
                    <img src="/images/cart.png" alt="Cart" className="icon" />
                </button>
            </div>
        </header>
    );
}

export default Header;
