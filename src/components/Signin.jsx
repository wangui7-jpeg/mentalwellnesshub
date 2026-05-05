import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading("Please wait while we log you in...");
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "https://kbenkamotho.alwaysdata.net/api/signin",
        formdata
      );

      setLoading("");

      if (response.data.user) {
        // Save user in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        navigate("/");
      } else {
        setError("Login failed. Try again.");
      }
    } catch (err) {
      setLoading("");
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <h1 className="text-primary">Sign In</h1>

        <h5 className="text-info">{loading}</h5>
        <h4 className="text-danger">{error}</h4>

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

          <input
            type="submit"
            value="Signin"
            className="btn btn-primary"
          />
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