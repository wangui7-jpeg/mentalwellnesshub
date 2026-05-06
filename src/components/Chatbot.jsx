import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 🌿 I’m here for you. How are you feeling today?" }
  ]);
  const [input, setInput] = useState("");

  const botReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("sad")) return "I'm really sorry you're feeling that way 💚";
    if (msg.includes("stress")) return "Take a deep breath with me 🌬️";
    if (msg.includes("anxious")) return "You're safe here 🌿 Let’s slow down together";
    if (msg.includes("happy")) return "That’s amazing 🌱 keep going!";

    return "I'm listening 🌿 tell me more.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botMsg = { from: "bot", text: botReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* 🌿 FLOATING BUTTON */}
      <div style={styles.fab} onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* 🌿 CHAT WINDOW */}
      {open && (
        <div style={styles.chatBox}>
          <div style={styles.header}>
            <span>Wellness Chat 🌿</span>
            <button onClick={() => setOpen(false)} style={styles.close}>
              ✖
            </button>
          </div>

          <div style={styles.messages}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  ...styles.msg,
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  backgroundColor: m.from === "user" ? "#16A085" : "#E8F8F5",
                  color: m.from === "user" ? "white" : "#2C3E50",
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div style={styles.inputBox}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here..."
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.button}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "#16A085",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },

  chatBox: {
    position: "fixed",
    bottom: "85px",
    right: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "white",
    border: "1px solid #A3E4D7",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  },

  header: {
    backgroundColor: "#16A085",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },

  close: {
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
  },

  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  msg: {
    padding: "8px 10px",
    borderRadius: "10px",
    maxWidth: "75%",
  },

  inputBox: {
    display: "flex",
    borderTop: "1px solid #eee",
  },

  input: {
    flex: 1,
    padding: "8px",
    border: "none",
    outline: "none",
  },

  button: {
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    padding: "8px 12px",
  },
};