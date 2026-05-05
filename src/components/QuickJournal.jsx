import { useState } from "react";

export default function QuickJournal() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState("");

  const saveEntry = () => {
    setSaved(text);
    setText("");
  };

  return (
    <div style={styles.card}>
      <h3>Quick Journal</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts..."
        style={styles.textarea}
      />

      <button onClick={saveEntry} style={styles.button}>
        Save
      </button>

      {saved && (
        <p style={{ marginTop: "10px" }}>
          Last entry: {saved}
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "12px",
    backgroundColor: "#dab821",
  },
  textarea: {
    width: "100%",
    height: "80px",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
  },
};