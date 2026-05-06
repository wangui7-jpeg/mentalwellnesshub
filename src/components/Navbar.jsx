import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  const linkStyle = ({ isActive }) => ({
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    paddingBottom: "4px",
    borderBottom: isActive ? "2px solid #A3E4D7" : "2px solid transparent",
    transition: "0.2s ease",
  });

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Mental Wellness Hub 🌿</h2>

      <div style={styles.links}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/shop" style={linkStyle}>Shop</NavLink>
         <NavLink to="/sell" style={linkStyle}>Sell Books </NavLink>
        <NavLink to="/mentorship" style={linkStyle}>Mentorship</NavLink>

        {!user ? (
          <>
            <NavLink to="/signin" style={linkStyle}>Signin</NavLink>
            <NavLink to="/signup" style={linkStyle}>Signup</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/profile" style={linkStyle}>
              Profile
            </NavLink>

            <span style={styles.user}>
              {user.username} 👋
            </span>

            <button onClick={logout} style={styles.logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#16A085",
    color: "white",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
  },

  logo: {
    margin: 0,
  },

  links: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  user: {
    fontWeight: "bold",
  },

  logout: {
    backgroundColor: "#138D75",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.2s",
  },
};