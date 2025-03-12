import { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/products")  // Call API Gateway
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
