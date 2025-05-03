import { useState, useRef } from "react";
import AdminHeader from "./AdminHeader";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [mrpPrice, setMrpPrice] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleAdd = async () => {
    if (!name || !price || !mrpPrice || !rating || !category || !description || !image) {
      alert("Please fill in all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("mrpPrice", mrpPrice);
    formData.append("rating", rating);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to add product");

      const data = await response.json();
      console.log("Product added successfully:", data);

      // Clear input fields
      setName("");
      setPrice("");
      setMrpPrice("");
      setRating("");
      setCategory("");
      setDescription("");
      setImage(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
    <AdminHeader />

    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Add New Product</h2>
        <input style={styles.input} type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input style={styles.input} type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input style={styles.input} type="number" placeholder="MRP Price" value={mrpPrice} onChange={(e) => setMrpPrice(e.target.value)} />
        <input style={styles.input} type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <input style={styles.input} type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <textarea style={styles.textarea} placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input style={styles.input} type="file" accept="image/*" ref={fileInputRef} onChange={(e) => setImage(e.target.files[0])} />
        <button style={styles.button} onClick={handleAdd}>Add Item</button>
      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "40px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
    display: "grid",
    gap: "15px",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px",
    height: "60px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    resize: "vertical",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2575fc",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default AddProducts;

