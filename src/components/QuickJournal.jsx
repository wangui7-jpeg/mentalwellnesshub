import { useState } from "react";

export default function QuickJournal() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState("");
  const [hover, setHover] = useState(false);

  const save = () => {
    if (!text.trim()) return;
    setSaved(text);
    setText("");
  };

  return (
    <div style={styles.card}>
      <h3>Quick Journal 📓</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts..."
        style={styles.textarea}
      />

      <button
        onClick={save}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...styles.button,
          transform: hover ? "scale(1.05)" : "scale(1)",
          backgroundColor: hover ? "#138D75" : "#16A085",
        }}
      >
        Save
      </button>

      {saved && (
        <p style={styles.saved}>
          {saved}
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

  textarea: {
    width: "100%",
    height: "90px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #A3E4D7",
    padding: "10px",
  },

  button: {
    marginTop: "10px",
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.2s ease",
  },

  saved: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#E8F8F5",
    borderRadius: "10px",
  },
};