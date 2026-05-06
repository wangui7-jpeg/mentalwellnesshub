import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [hover, setHover] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();

    // 🌿 FRONTEND ONLY (can connect backend later)
    console.log("Subscribed:", email);

    alert("Thanks for subscribing 🌿");
    setEmail("");
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* 🌿 ABOUT */}
        <div style={styles.column}>
          <h4>Mental Wellness Hub 🌿</h4>
          <p>
            A safe space for your mental wellness journey. Breathe, reflect,
            and grow with us.
          </p>
        </div>

        {/* 🌿 LINKS */}
        <div style={styles.column}>
          <h4>Quick Links</h4>
          {["Home", "About", "Mentorship", "Profile"].map((item, i) => (
            <Link
              key={i}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              style={{
                ...styles.link,
                color: hover === i ? "#A3E4D7" : "white",
              }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* 🌿 CONTACT */}
        <div style={styles.column}>
          <h4>Contact</h4>
          <p>Email: support@wellnesshub.com</p>
          <p>Phone: +254 700 000 000</p>
          <p>Nairobi, Kenya</p>
        </div>

        {/* 🌿 NEWSLETTER */}
        <div style={styles.column}>
          <h4>Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <button style={styles.button}>
              Subscribe
            </button>
          </form>

          {/* 🌿 SOCIAL ICONS */}
          <div style={styles.socials}>
            {["🌐", "📘", "📸", "🐦"].map((icon, i) => (
              <span
                key={i}
                style={{
                  ...styles.icon,
                  transform: hover === "icon" + i ? "scale(1.2)" : "scale(1)",
                }}
                onMouseEnter={() => setHover("icon" + i)}
                onMouseLeave={() => setHover(null)}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* 🌿 BACK TO TOP */}
      <div style={styles.bottom}>
        <span>© {new Date().getFullYear()} Mental Wellness Hub 🌿</span>
        <button onClick={scrollTop} style={styles.topBtn}>
          ↑ Top
        </button>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#16A085",
    color: "white",
    marginTop: "auto",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "30px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  link: {
    textDecoration: "none",
    transition: "0.2s",
  },

  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "none",
  },

  button: {
    marginTop: "8px",
    backgroundColor: "#138D75",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  socials: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },

  icon: {
    fontSize: "20px",
    cursor: "pointer",
    transition: "0.2s",
  },

  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderTop: "1px solid rgba(255,255,255,0.3)",
  },

  topBtn: {
    backgroundColor: "#138D75",
    border: "none",
    color: "white",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};