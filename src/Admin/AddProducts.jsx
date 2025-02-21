import React from 'react'
import { useState } from 'react';
import AdminAuth from './AdminAuth';
import AdminHeader from './AdminHeader';

const AddProducts = () => {
     const [items, setItems] = useState([]);
      const [name, setName] = useState("");
      const [price, setPrice] = useState("");
      const [rating, setRating] = useState('')
      const [editingId, setEditingId] = useState(null); 
      const [editName, setEditName] = useState("");
      const [editPrice, setEditPrice] = useState("");
      const [editRating, setEditRating] = useState("")

      
  const handleAdd = () => {
    if (!name || !price || !rating) return;
    setItems([...items, { id: Date.now(), name, price, rating }]);
    setName("");
    setPrice("");
    setRating("")
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditName(item.name);
    setEditPrice(item.price);
    setEditRating(item.rating)
  };

  const handleSave = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, name: editName, price: editPrice, rating: editRating } : item
    ));
    setEditingId(null);
  };

  return (
    
   <div>
     
      <AdminHeader/>
      <hr />
    
      <div>
        <input
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
        <input type="number"
        placeholder="Enter Rating"  value={rating} onChange={(e) =>setRating(e.target.value)}/>
       
        <button onClick={handleAdd}>Add Item</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {editingId === item.id ? (
                <>
                  <td>
                    <input 
                      type="text" 
                      value={editName} 
                      onChange={(e) => setEditName(e.target.value)} 
                    />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      value={editPrice} 
                      onChange={(e) => setEditPrice(e.target.value)} 
                    />
                    </td>
                    <td>
                      <input 
                      type="number" 
                      value={editRating} 
                      onChange={(e) => setEditRating(e.target.value)} 
                    />
                    </td>
                  <td>
                    <button onClick={() => handleSave(item.id)}>Save</button>
                    <button className="delete" onClick={() => setEditingId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.name}</td>
                  <td>Rs: {item.price}</td>
                  <td>{item.rating}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default AddProducts
