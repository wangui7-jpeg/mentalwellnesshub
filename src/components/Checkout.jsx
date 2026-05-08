import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const location = useLocation();

  const cart = location.state?.cart || [];
  const total = location.state?.total || 0;

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // 💡 SIMPLE FAKE PAYMENT (NO API)
  const payNow = () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }

    setLoading(true);
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      setSuccess("✅ Check your phone to complete payment")
    }, 2000);
  };

  return (
    <div style={styles.page}>
      <h1>💳 Checkout</h1>

      {cart.length === 0 ? (
        <p>No items in checkout.</p>
      ) : (
        <>
          <h3>Your Order</h3>

          {cart.map((item, i) => (
            <div key={i} style={styles.item}>
              <p>{item.product_name}</p>
              <p>Ksh {item.product_cost}</p>
            </div>
          ))}

          <h2>Total: Ksh {total}</h2>

          {/* PHONE INPUT */}
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />

          {/* SUCCESS MESSAGE */}
          {success && (
            <p style={{ color: "green", marginTop: "10px" }}>
              {success}
            </p>
          )}

          {/* BUTTON */}
          <button
            style={styles.payBtn}
            onClick={payNow}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "100px 20px",
    minHeight: "100vh",
    backgroundColor: "#F5FFFD",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ccc",
    padding: "10px 0",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  payBtn: {
    marginTop: "20px",
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    cursor: "pointer",
  },
};