import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 🔗 API + IMAGE URL
  const API_URL = "http://marthawaruix.alwaysdata.net/api/get_products";
  const IMG_URL = "http://marthawaruix.alwaysdata.net/static/images/";

  // 📦 FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🛒 CART FUNCTIONS
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.product_cost, 0);

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1>📚 Mental Health Shop</h1>
        <p>Journals & books for your healing journey 🌿</p>
      </div>

      {/* LOADING + ERROR */}
      {loading && <p style={{ textAlign: "center" }}>Loading products...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {/* PRODUCTS */}
      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.product_id} style={styles.card}>

            <img
              src={IMG_URL + item.product_photo}
              alt={item.product_name}
              style={{
                ...styles.image,
                transform:
                  hovered === item.product_id ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHovered(item.product_id)}
              onMouseLeave={() => setHovered(null)}
            />

            <h3 style={styles.title}>{item.product_name}</h3>
            <p style={styles.desc}>{item.product_description}</p>
            <h4 style={styles.price}>Ksh {item.product_cost}</h4>

            <button
              onClick={() => addToCart(item)}
              style={styles.button}
            >
              Add to Cart 🛒
            </button>

          </div>
        ))}
      </div>

      {/* FLOATING CART */}
      <div
        style={styles.floatingCart}
        onClick={() => setOpenCart(!openCart)}
      >
        🛒 {cart.length}
      </div>

      {/* CART POPUP */}
      {openCart && (
        <div style={styles.cartPopup}>
          <h3>🛍️ Your Cart</h3>

          {cart.length === 0 ? (
            <p style={styles.empty}>No items yet 🌿</p>
          ) : (
            <>
              {cart.map((item, i) => (
                <div key={i} style={styles.cartItem}>
                  <span>{item.product_name}</span>
                  <button
                    onClick={() => removeFromCart(i)}
                    style={styles.removeBtn}
                  >
                    ✖
                  </button>
                </div>
              ))}

              <h4 style={styles.total}>Total: Ksh {total}</h4>

              {/* ✅ BUY NOW BUTTON */}
              <button
                onClick={() =>
                  navigate("/makepayment", { state: { cart } })
                }
                style={styles.buyNowBtn}
              >
                Buy Now 💳
              </button>

              <button onClick={clearCart} style={styles.clearBtn}>
                Clear Cart
              </button>
            </>
          )}

          <button
            onClick={() => setOpenCart(false)}
            style={styles.closeBtn}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#F5FFFD",
    padding: "100px 20px 40px",
  },

  header: {
    textAlign: "center",
    marginBottom: "25px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "15px",
    border: "1px solid #A3E4D7",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  title: {
    color: "#16A085",
    marginTop: "10px",
  },

  desc: {
    fontSize: "14px",
    color: "#555",
  },

  price: {
    color: "#138D75",
    marginTop: "10px",
  },

  button: {
    marginTop: "10px",
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  floatingCart: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#16A085",
    color: "white",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },

  cartPopup: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "260px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },

  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },

  removeBtn: {
    backgroundColor: "#E74C3C",
    color: "white",
    border: "none",
    padding: "3px 6px",
    borderRadius: "4px",
    cursor: "pointer",
  },

  total: {
    marginTop: "10px",
    color: "#16A085",
  },

  buyNowBtn: {
    marginTop: "10px",
    width: "100%",
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  clearBtn: {
    marginTop: "10px",
    width: "100%",
    backgroundColor: "#B03A2E",
    color: "white",
    border: "none",
    padding: "6px",
    borderRadius: "6px",
  },

  closeBtn: {
    marginTop: "10px",
    width: "100%",
    backgroundColor: "#138D75",
    color: "white",
    border: "none",
    padding: "6px",
    borderRadius: "6px",
  },

  error: {
    color: "red",
    textAlign: "center",
  },

  empty: {
    textAlign: "center",
    color: "#777",
  },
};