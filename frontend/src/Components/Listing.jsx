import { useState, useEffect } from "react";
import axios from "axios";

const Listing = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: ""
    });

    const [listings, setListings] = useState([]);

    // Fetch existing listings on component mount
    useEffect(() => {
        fetchListings();
    }, []);

    const fetchListings = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/listings");
            setListings(response.data);
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/listings", formData);
            setListings([...listings, response.data]); // Update UI immediately
            setFormData({ title: "", description: "", price: "" }); // Clear form
        } catch (error) {
            console.error("Error adding listing:", error);
        }
    };

    return (
        <div>
            <h2>Add Listing</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                <button type="submit">Add Listing</button>
            </form>

            <h2>Listings</h2>
            {listings.length === 0 ? (
                <p>No listings available.</p>
            ) : (
                listings.map((listing) => (
                    <div key={listing._id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
                        <h3>{listing.title}</h3>
                        <p>{listing.description}</p>
                        <strong>${listing.price}</strong>
                    </div>
                ))
            )}
        </div>
    );
};

export default Listing;
