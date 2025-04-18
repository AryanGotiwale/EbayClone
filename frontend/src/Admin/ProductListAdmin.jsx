// import { useEffect, useState } from "react";
// import AdminHeader from "./AdminHeader";
// import { MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state
//   const [error, setError] = useState(null); // Add error state

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/products");
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDelete = async(productId)=>{
//     const isConfirmed  = window.confirm("Are you sure you want to delete this product")
//     if(!isConfirmed) return
//     try{
//       const response = await fetch(`http://localhost:5000/api/products/${productId}`,
//       {method: "DELETE",})
//   if(!response.ok) throw new Error("Falied to delete")
//     setProducts(products.filter((p) => p._id !== productId));
//       } catch(error){
//         console.error("Error deleting the product", error);
//         console.log(productId);
        
        
//       }}
//    const handleUpdate = async (productId, updatedData) => {
//         try {
//           const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(updatedData),
//           });
      
//           if (!response.ok) throw new Error("Failed to update product");
      
//           const updatedProduct = await response.json();
//           setProducts(products.map((p) => (p._id === productId ? updatedProduct : p)));
//         } catch (error) {
//           console.error("Error updating product", error);
//         }
//       };
      

//   return (
//     <div>
//       <AdminHeader />
//       <h2>Product List</h2>

//       {loading && <p>Loading products...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {products.length > 0 ? (
//             <table border="1">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Price</th>
//                 <th>MRP Price</th>
//                 <th>Rating</th>
//                 <th>Description</th> 
//                 <th>Image</th>  
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product._id}>
//                   <td>{product.name }</td>
//                   <td>${product.price}</td>
//                   <td>${product.mrpPrice}</td>
//                   <td>{product.rating} ⭐</td>
//                   <td>{product.description}</td>
//                   <td>
//                     <Link to={product.image} target="blank">
//                     <img 
//                       src={product.image} 
//                       alt={product.name} 
//                       style={{ width: "50px", height: "50px" }} 
//                     /></Link>
                 
//                   </td>
//                   <td>
//                     <button onClick={()=>{handleUpdate(product._id)}}><FaEdit /></button><p> </p>
//                     <button style={{backgroundColor:'red'}} onClick={()=>{handleDelete(product._id)}}><MdDelete /></button>
//                   </td>
                  
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
          
        
       

//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// }; 

// export default ProductList;
// import { useEffect, useState } from "react";
// import AdminHeader from "./AdminHeader";
// import { MdDelete, MdEdit } from "react-icons/md";
// import { FaSave } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(null);
//   const [editedProduct, setEditedProduct] = useState({});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/products");
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Handle Delete
//   const handleDelete = async (productId) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     try {
//       const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) throw new Error("Failed to delete");

//       setProducts(products.filter((product) => product._id !== productId));
//     } catch (error) {
//       console.error("Error deleting the product", error);
//     }
//   };

//   // Enable Edit Mode
//   const handleEdit = (product) => {
//     setEditMode(product._id);
//     setEditedProduct({ ...product });
//   };

//   // Handle Change in Input Fields
//   const handleChange = (e, field) => {
//     setEditedProduct({ ...editedProduct, [field]: e.target.value });
//   };

//   // Save Updated Product
//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/products/${editedProduct._id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(editedProduct),
//       });

//       if (!response.ok) throw new Error("Failed to update product");

//       setProducts(products.map((p) => (p._id === editedProduct._id ? editedProduct : p)));
//       setEditMode(null);
//     } catch (error) {
//       console.error("Error updating the product", error);
//     }
//   };

//   // Cancel Editing
//   const handleCancel = () => {
//     setEditMode(null);
//     setEditedProduct({});
//   };

//   return (
//     <div>
//       <AdminHeader />
//       <h2>Product List</h2>

//       {loading && <p>Loading products...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {products.length > 0 ? (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Price</th>
//               <th>MRP Price</th>
//               <th>Rating</th>
//               <th>Description</th>
//               <th>Image</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product._id}>
//                 <td>
//                   {editMode === product._id ? (
//                     <input type="text" value={editedProduct.name} onChange={(e) => handleChange(e, "name")} />
//                   ) : (
//                     product.name
//                   )}
//                 </td>
//                 <td>
//                   {editMode === product._id ? (
//                     <input type="number" value={editedProduct.price} onChange={(e) => handleChange(e, "price")} />
//                   ) : (
//                     `$${product.price}`
//                   )}
//                 </td>
//                 <td>
//                   {editMode === product._id ? (
//                     <input type="number" value={editedProduct.mrpPrice} onChange={(e) => handleChange(e, "mrpPrice")} />
//                   ) : (
//                     `$${product.mrpPrice}`
//                   )}
//                 </td>
//                 <td>
//                   {editMode === product._id ? (
//                     <input type="number" value={editedProduct.rating} onChange={(e) => handleChange(e, "rating")} />
//                   ) : (
//                     `${product.rating} ⭐`
//                   )}
//                 </td>
//                 <td>
//                   {editMode === product._id ? (
//                     <input type="text" value={editedProduct.description} onChange={(e) => handleChange(e, "description")} />
//                   ) : (
//                     product.description
//                   )}
//                 </td>
//                 <td>
//                   <Link to={product.image} target="_blank">
//                     <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
//                   </Link>
//                 </td>
//                 <td>
//                   {editMode === product._id ? (
//                     <>
//                       <button onClick={handleSave} style={{ backgroundColor: "green" }}>
//                         <FaSave />
//                       </button>
//                       <button onClick={handleCancel} style={{ marginLeft: "5px", backgroundColor: "gray" }}>
//                         Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button onClick={() => handleEdit(product)}>
//                         <MdEdit />
//                       </button>
//                       <button onClick={() => handleDelete(product._id)} style={{ backgroundColor: "red", marginLeft: "5px" }}>
//                         <MdDelete />
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// };

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
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
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
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete");

      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting the product", error);
    }
  };

  const handleEdit = (product) => {
    setEditProductId(product._id);
    setEditedProduct({ ...product }); // Copy current product details
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

      // Update product in state
      setProducts(products.map((p) => (p._id === productId ? editedProduct : p)));
      setEditProductId(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  return (
    <div>
      <AdminHeader />
      <h2>Product List</h2>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {products.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>MRP Price</th>
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
                    <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
                  </Link>
                </td>
                <td>
                  {editProductId === product._id ? (
                    <button onClick={() => handleSave(product._id)}>
                      <FaSave />
                    </button>
                  ) : (
                    <span>
                      <button onClick={() => handleEdit(product)}>
                      <MdEdit />
                    </button>
                    <button style={{ backgroundColor: "red" }} onClick={() => handleDelete(product._id)}>
                    <MdDelete />
                  </button>
                    </span>
                    
                  )}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
