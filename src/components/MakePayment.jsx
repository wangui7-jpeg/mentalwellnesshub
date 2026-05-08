import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Makepayment = () => {
  const { product } = useLocation().state || {};
  const navigate = useNavigate();

  const img_url =
    "https://kbenkamotho.alwaysdata.net/static/images/";

  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!product) {
      setError("No product selected");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();
      formdata.append("phone", number);
      formdata.append("amount", product.product_cost);

      const response = await axios.post(
        "https://kbenkamotho.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setSuccess(
        response.data?.message || "Payment request sent successfully"
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Payment failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">

      {/* BACK BUTTON */}
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/shop")}
      >
        ← Back to Shop
      </button>

      <h1 className="text-success text-center">
        Make Payment - M-Pesa
      </h1>

      {/* IF NO PRODUCT */}
      {!product ? (
        <p className="text-danger text-center">
          No product selected. Please go back to shop.
        </p>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6 card shadow p-4">

            {/* IMAGE */}
            <img
              src={img_url + product.product_photo}
              alt={product.product_name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h2 className="text-info mt-3">
              {product.product_name}
            </h2>

            <p>{product.product_description}</p>

            <h3 className="text-warning">
              Kes {product.product_cost}
            </h3>

            {/* STATUS */}
            {loading && (
              <p className="text-info">Processing payment...</p>
            )}

            {success && (
              <p className="text-success">{success}</p>
            )}

            {error && (
              <p className="text-danger">{error}</p>
            )}

            {/* FORM */}
            <form onSubmit={handlesubmit}>
              <input
                type="number"
                className="form-control"
                placeholder="Enter phone (2547XXXXXXXX)"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />

              <br />

              <button
                type="submit"
                className="btn btn-success w-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "Pay with M-Pesa"}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Makepayment;