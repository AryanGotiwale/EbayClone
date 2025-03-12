import { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/listings") // Fetch products from backend
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map((product) => (
                    <div key={product._id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <strong>${product.price}</strong>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;
