import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "http://marthawaruix.alwaysdata.net/api/signin",
        formdata
      );

      setLoading(false);

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError("Login failed. Try again.");
      }
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <h1 style={{ color: "#16A085" }}>Sign In</h1>

        {loading && (
          <h6 style={{ color: "#16A085" }}>
            Logging you in...
          </h6>
        )}

        {error && (
          <h6 style={{ color: "red" }}>
            {error}
          </h6>
        )}

        <form onSubmit={handlesubmit}>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <button
            type="submit"
            disabled={loading}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: hover ? "#138D75" : "#16A085",
              color: "white",
              border: "none",
              padding: "10px",
              width: "100%",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.2s",
              transform: hover ? "scale(1.03)" : "scale(1)",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <br />
          <br />

          Don't have an account?{" "}
          <Link to="/signup">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;