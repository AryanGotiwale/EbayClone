
// export default ProductList;
import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete");
      setProducts(products.filter((p) => p._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditProductId(product._id);
    setEditedProduct({ ...product });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedProduct),
      });

      if (!response.ok) throw new Error("Failed to update product");
      setProducts(products.map((p) => (p._id === productId ? editedProduct : p)));
      setEditProductId(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div><AdminHeader />
    <div style={styles.page}>
      
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>Product List</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : products.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>MRP</th>
                <th>Rating</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    {editProductId === product._id ? (
                      <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td>
                    {editProductId === product._id ? (
                      <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />
                    ) : (
                      `$${product.price}`
                    )}
                  </td>
                  <td>
                    {editProductId === product._id ? (
                      <input type="number" name="mrpPrice" value={editedProduct.mrpPrice} onChange={handleChange} />
                    ) : (
                      `$${product.mrpPrice}`
                    )}
                  </td>
                  <td>
                    {editProductId === product._id ? (
                      <input type="number" name="rating" value={editedProduct.rating} onChange={handleChange} />
                    ) : (
                      `${product.rating} ⭐`
                    )}
                  </td>
                  <td>
                    {editProductId === product._id ? (
                      <input type="text" name="description" value={editedProduct.description} onChange={handleChange} />
                    ) : (
                      product.description
                    )}
                  </td>
                  <td>
                    <Link to={product.image} target="blank">
                      <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px", borderRadius: "5px" }} />
                    </Link>
                  </td>
                  <td>
                    {editProductId === product._id ? (
                      <button style={styles.saveBtn} onClick={() => handleSave(product._id)}>
                        <FaSave />
                      </button>
                    ) : (
                      <>
                        <button style={styles.editBtn} onClick={() => handleEdit(product)}>
                          <MdEdit />
                        </button>
                        <button style={styles.deleteBtn} onClick={() => handleDelete(product._id)}>
                          <MdDelete />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  editBtn: {
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    marginRight: "6px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  saveBtn: {
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductList;
