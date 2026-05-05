import { useState } from "react";

export default function MoodCheckIn() {
  const [mood, setMood] = useState("");

  const moods = [
    { label: "Happy", emoji: "😊" },
    { label: "Calm", emoji: "😌" },
    { label: "Sad", emoji: "😔" },
    { label: "Anxious", emoji: "😰" },
    { label: "Angry", emoji: "😡" },
  ];

  return (
    <div style={styles.card}>
      <h3>How are you feeling today?</h3>

      <div style={styles.row}>
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => setMood(m.label)}
            style={{
              ...styles.button,
              border: mood === m.label ? "2px solid green" : "1px solid gray",
            }}
          >
            {m.emoji} {m.label}
          </button>
        ))}
      </div>

      {mood && <p style={{ marginTop: "10px" }}>You feel: {mood}</p>}
    </div>
  );
}

const styles = {
  card: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "12px",
    backgroundColor: "#0ee5f5",
  },
  row: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  button: {
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    background: "white",
  },
};