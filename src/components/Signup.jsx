import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [hover, setHover] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      const response = await axios.post(
        "http://marthawaruix.alwaysdata.net/api/signup",
        formdata
      );

      setLoading(false);
      setSuccess(response.data.message);

      // reset fields
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      setTimeout(() => {
        setSuccess("");
      }, 4000);

    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="card col-md-6 shadow p-4">
        <h1 style={{ color: "#16A085" }}>Sign Up</h1>

        {loading && (
          <h6 style={{ color: "#16A085" }}>
            Creating your account...
          </h6>
        )}

        {success && (
          <h6 style={{ color: "green" }}>
            {success}
          </h6>
        )}

        {error && (
          <h6 style={{ color: "red" }}>
            {error}
          </h6>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />

          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <input
            type="tel"
            placeholder="Phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <br />
          <br />

          Already have an account?{" "}
          <Link to="/signin">Signin</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;