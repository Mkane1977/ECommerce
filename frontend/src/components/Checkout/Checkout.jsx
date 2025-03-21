import React, { useState } from 'react';
import { placeOrder } from '../../services/orderService';

const Checkout = () => {
    const [order, setOrder] = useState({ items: [], total: 0 });

    const handleOrder = async () => {
        try {
            const response = await placeOrder(order);
            alert("Order placed successfully!");
        } catch (error) {
            alert("Failed to place order.");
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <button onClick={handleOrder}>Place Order</button>
        </div>
    );
};

export default Checkout;
