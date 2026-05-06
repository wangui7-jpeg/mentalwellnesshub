import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  const API_URL =
    "http://marthawaruix.alwaysdata.net/api/get_products";

  const IMG_URL =
    "http://marthawaruix.alwaysdata.net/static/images/";

  // ---------------- FETCH PRODUCTS ----------------
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(API_URL);

      console.log("API RESPONSE:", res.data);

      // safety check (VERY IMPORTANT)
      if (!Array.isArray(res.data)) {
        throw new Error("API did not return an array of products");
      }

      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to load products"
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ---------------- CART LOGIC ----------------
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.product_cost || 0),
    0
  );

  return (
    <div style={styles.page}>

      <h2 style={styles.title}>🛍️ Mental Wellness Shop</h2>

      {/* STATUS */}
      {loading && <Loader />}
      {error && <p style={styles.error}>{error}</p>}

      {/* EMPTY STATE (IMPORTANT) */}
      {!loading && products.length === 0 && (
        <p style={styles.empty}>No products found 😢</p>
      )}

      {/* PRODUCTS GRID */}
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.product_id} style={styles.card}>

            <img
              src={IMG_URL + product.product_photo}
              alt={product.product_name}
              style={styles.image}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/200x150";
              }}
            />

            <h3>{product.product_name}</h3>

            <p style={styles.desc}>
              {product.product_description?.slice(0, 80)}...
            </p>

            <h4 style={styles.price}>
              Ksh {product.product_cost}
            </h4>

            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart 🛒
            </button>

            <button
              style={styles.buyBtn}
              onClick={() =>
                navigate("/makepayment", {
                  state: { product },
                })
              }
            >
              Buy Now
            </button>

          </div>
        ))}
      </div>

      {/* FLOATING CART */}
      <div
        style={styles.floatingCart}
        onClick={() => setShowCart(!showCart)}
      >
        🛒 {cart.length}
      </div>

      {/* CART PANEL */}
      {showCart && (
        <div style={styles.cart}>
          <h3>Your Cart</h3>

          {cart.length === 0 ? (
            <p>No items</p>
          ) : (
            cart.map((item, i) => (
              <div key={i} style={styles.cartItem}>
                <span>{item.product_name}</span>

                <button
                  onClick={() => removeFromCart(i)}
                  style={styles.removeBtn}
                >
                  ✖
                </button>
              </div>
            ))
          )}

          <h4>Total: Ksh {total}</h4>

          <button
            style={styles.closeBtn}
            onClick={() => setShowCart(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;