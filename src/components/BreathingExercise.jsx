import { useState, useEffect } from "react";

export default function BreathingExercise() {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState("Ready");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!active) return;

    const steps = ["Inhale 🌿", "Hold 🌬️", "Exhale 💚"];
    let i = 0;

    const interval = setInterval(() => {
      setPhase(steps[i]);
      i = (i + 1) % steps.length;
    }, 4000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div style={styles.card}>
      <h3>Breathing Exercise 🌬️</h3>

      <div style={styles.circle}>
        {phase}
      </div>

      <button
        onClick={() => setActive(!active)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...styles.button,
          transform: hover ? "scale(1.08)" : "scale(1)",
          backgroundColor: hover ? "#138D75" : "#16A085",
        }}
      >
        {active ? "Stop" : "Start"}
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

  circle: {
    margin: "15px auto",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "2px solid #16A085",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F8F5",
    fontWeight: "bold",
    color: "#16A085",
  },

  button: {
    marginTop: "10px",
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "0.2s ease",
  },
};