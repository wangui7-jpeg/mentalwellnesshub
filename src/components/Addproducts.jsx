import { useState } from "react";

export default function Addproducts() {

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  /* 🌿 HANDLE TEXT INPUTS */
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  /* 🌿 HANDLE IMAGE UPLOAD */
  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      setProduct({
        ...product,
        image: URL.createObjectURL(file),
      });
    }
  };

  /* 🌿 SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    alert("Product Added Successfully 🌿");

    setProduct({
      title: "",
      price: "",
      description: "",
      image: "",
    });
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Add New Product 📚
        </h1>

        <form onSubmit={handleSubmit}>

          {/* 🌿 TITLE */}
          <input
            type="text"
            name="title"
            placeholder="Product title"
            value={product.title}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* 🌿 PRICE */}
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* 🌿 DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          {/* 🌿 IMAGE PICKER */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
          />

          {/* 🌿 IMAGE PREVIEW */}
          {product.image && (
            <img
              src={product.image}
              alt="preview"
              style={styles.preview}
            />
          )}

          {/* 🌿 BUTTON */}
          <button type="submit" style={styles.button}>
            Add Product 🌿
          </button>

        </form>

      </div>

    </div>
  );
}

/* 🌿 STYLES */
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
    backgroundColor: "white",
    width: "100%",
    maxWidth: "520px",
    padding: "30px",
    borderRadius: "22px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    color: "#16A085",
    marginBottom: "25px",
    fontSize: "30px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    resize: "none",
    boxSizing: "border-box",
  },

  preview: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "20px",
  },

  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};