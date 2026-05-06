import React, { useState } from "react";
import axios from "axios";

const Addproduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const API_URL = "http://marthawaruix.alwaysdata.net/api/add_product";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!product_photo) {
        setLoading(false);
        setError("Please upload a product image");
        return;
      }

      const formdata = new FormData();
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      const res = await axios.post(API_URL, formdata);

      setLoading(false);
      setSuccess(res.data?.message || "Product added successfully 🎉");

      // reset form fields
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto(null);
      e.target.reset();

      setTimeout(() => setSuccess(""), 4000);
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message ||
        err.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>➕ Add New Product</h2>
        <p style={styles.subtitle}>Upload a new item to your shop 🌿</p>

        {loading && <p style={styles.loading}>Uploading...</p>}
        {success && <p style={styles.success}>{success}</p>}
        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product name"
            required
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            style={styles.input}
          />

          <textarea
            placeholder="Product description"
            required
            value={product_description}
            onChange={(e) => setProductDescription(e.target.value)}
            style={{ ...styles.input, height: "90px" }}
          />

          <input
            type="number"
            placeholder="Price (Ksh)"
            required
            value={product_cost}
            onChange={(e) => setProductCost(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Product Image</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={(e) => setProductPhoto(e.target.files[0])}
            style={styles.file}
          />

          <button type="submit" style={styles.button}>
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#F5FFFD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    border: "1px solid #A3E4D7",
  },

  title: {
    textAlign: "center",
    color: "#16A085",
    marginBottom: "5px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },

  label: {
    fontSize: "14px",
    color: "#16A085",
    marginBottom: "5px",
    display: "block",
  },

  file: {
    marginBottom: "15px",
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  loading: {
    color: "#555",
    textAlign: "center",
  },

  success: {
    color: "#2ecc71",
    textAlign: "center",
    marginBottom: "10px",
  },

  error: {
    color: "#e74c3c",
    textAlign: "center",
    marginBottom: "10px",
  },
};