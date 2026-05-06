import { useState } from "react";

export default function MoodCheckIn() {
  const [mood, setMood] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  const moods = ["Happy 😊", "Calm 😌", "Sad 😔", "Anxious 😟"];

  return (
    <div style={styles.card}>
      <h3>How are you feeling today? 🌿</h3>

      <div style={styles.buttons}>
        {moods.map((m, index) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              ...styles.button,
              transform: hoverIndex === index ? "scale(1.08)" : "scale(1)",
              backgroundColor:
                hoverIndex === index ? "#138D75" : "#16A085",
            }}
          >
            {m}
          </button>
        ))}
      </div>

      {mood && (
        <p style={styles.result}>
          You feel: <strong>{mood}</strong>
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #A3E4D7",
    borderRadius: "12px",
    padding: "15px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px",
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

  result: {
    marginTop: "12px",
    color: "#2C3E50",
  },
};