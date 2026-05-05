import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Mental Wellness Hub 🌿</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/signin" style={styles.link}>Signin</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
        <Link to="/mentorship" style={styles.link}>Mentorship</Link>
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
    backgroundColor: "#1bbee7",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};