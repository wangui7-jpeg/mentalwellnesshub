import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("Please wait as registration is in progress...");
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      const response = await axios.post(
        "https://kbenkamotho.alwaysdata.net/api/signup",
        formdata
      );

      setLoading("");
      setSuccess(response.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      setTimeout(() => {
        setSuccess("");
      }, 5000);

    } catch (err) {
      setLoading("");
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="card col-md-6 shadow p-4">
        <h1 className="text-primary">Sign Up</h1>

        <h5 className="text-info">{loading}</h5>
        <h3 className="text-success">{success}</h3>
        <h4 className="text-danger">{error}</h4>

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

          <input
            type="submit"
            value="Signup"
            className="btn btn-primary"
          />
          <br />
          <br />

          Already have an account? <Link to="/signin">Signin</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;