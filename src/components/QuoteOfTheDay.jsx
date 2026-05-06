import { useState, useEffect } from "react";

export default function QuoteOfTheDay() {
  const quotes = [
    "You are doing better than you think 🌿",
    "Breathe. This moment is enough 🌬️",
    "Healing takes time, be gentle with yourself 💚",
    "One step at a time is still progress 🌱",
    "You are stronger than you feel right now 🌸",
  ];

  const [quote, setQuote] = useState("");
  const [hover, setHover] = useState(false);

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div style={styles.card}>
      <h3>Quote of the Day 💬</h3>

      <p style={styles.text}>{quote}</p>

      <button
        onClick={getRandomQuote}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...styles.button,
          transform: hover ? "scale(1.05)" : "scale(1)",
          backgroundColor: hover ? "#138D75" : "#16A085",
        }}
      >
        New Quote
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #A3E4D7",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
  },

  text: {
    marginTop: "10px",
    marginBottom: "15px",
    color: "#16A085",
    fontStyle: "italic",
  },

  button: {
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.2s ease",
  },
};