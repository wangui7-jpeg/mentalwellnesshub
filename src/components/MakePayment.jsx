import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MakePayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];

  const total = cart.reduce(
    (sum, item) => sum + Number(item.product_cost),
    0
  );

  const [hover, setHover] = useState(false);

  return (
    <div style={styles.page}>

      <h2 style={styles.title}>💳 Checkout</h2>

      {cart.length === 0 ? (
        <div style={styles.empty}>
          <p>Your cart is empty 😢</p>
          <button style={styles.btn} onClick={() => navigate("/shop")}>
            Go Back to Shop
          </button>
        </div>
      ) : (
        <div style={styles.card}>

          {/* ITEMS */}
          {cart.map((item, index) => (
            <div key={index} style={styles.item}>
              <span>{item.product_name}</span>
              <span>Ksh {item.product_cost}</span>
            </div>
          ))}

          {/* TOTAL */}
          <div style={styles.totalBox}>
            <span>Total</span>
            <span>Ksh {total}</span>
          </div>

          {/* PAY BUTTON */}
          <button
            style={{
              ...styles.payBtn,
              backgroundColor: hover ? "#138D75" : "#16A085",
              transform: hover ? "scale(1.02)" : "scale(1)",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => alert("Payment integration coming soon 💳")}
          >
            Pay Now 💳
          </button>

        </div>
      )}

    </div>
  );
};

export default MakePayment;

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F5FFFD",
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#16A085",
    marginBottom: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },

  card: {
    width: "100%",
    maxWidth: "450px",
    background: "#fff",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    border: "1px solid #A3E4D7",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
    fontSize: "15px",
    color: "#333",
  },

  totalBox: {
    marginTop: "15px",
    paddingTop: "10px",
    borderTop: "2px solid #16A085",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#16A085",
  },

  payBtn: {
    width: "100%",
    marginTop: "20px",
    padding: "12px",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
    transition: "0.2s ease",
  },

  btn: {
    padding: "10px 15px",
    background: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },

  empty: {
    textAlign: "center",
    color: "#777",
  },
};