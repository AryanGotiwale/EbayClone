import { useState } from "react";
import AdminHeader from "./AdminHeader";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [mrpPrice, setMrpPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // const handleAdd = async () => {
  //   if (!name || !price || !mrpPrice || !rating || !description || !image) {
  //     alert("Please fill in all fields!");
  //     return;
  //   }
  
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("price", price);
  //   formData.append("mrpPrice", mrpPrice);
  //   formData.append("rating", rating);
  //   formData.append("description", description);
  //   formData.append("image", image);
  
  //   try {
  //     const response = await fetch("http://localhost:5000/api/products", {
  //       method: "POST",
  //       body: formData,
  //     });
  
  //     const responseText = await response.text(); // Read the response text
  
  //     if (!response.ok) {
  //       throw new Error(`Failed to add product: ${responseText}`);
  //     }
  
  //     const data = JSON.parse(responseText); // Parse JSON manually
  //     console.log("Product added successfully:", data);
  
  //     setName("");
  //     setPrice("");
  //     setMrpPrice("");
  //     setRating("");
  //     setDescription("");
  //     setImage(null);
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //     alert(`Error: ${error.message}`);
  //   }
  // };
  const handleAdd = async () => {
    if (!name || !price || !mrpPrice || !rating || !description || !image) {
      alert("Please fill in all fields!");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("mrpPrice", mrpPrice);
    formData.append("rating", rating);
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
  
      // Clear input fields after adding
      setName("");
      setPrice("");
      setMrpPrice("");
      setRating("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  
  

  return (
    <div>
      <AdminHeader />
      <hr />
      <div style={{ display: "grid", justifyContent: "center", gap: "15px" }}>
        <h2>Add New Product</h2>
        <input
          style={{ width: "400px" }}
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="MRP Price"
          value={mrpPrice}
          onChange={(e) => setMrpPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <textarea
          placeholder="Description"
          style={{ height: "50px", maxWidth: "400px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>
    </div>
  );
};

export default AddProducts;
