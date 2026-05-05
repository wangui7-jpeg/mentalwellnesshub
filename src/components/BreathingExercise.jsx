import { useState, useEffect } from "react";

export default function BreathingExercise() {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState("Ready");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let interval;

    if (active) {
      const steps = [
        { text: "Inhale 🌿", size: 1.4 },
        { text: "Hold 🌿", size: 1.4 },
        { text: "Exhale 🌿", size: 1 },
      ];

      let i = 0;

      interval = setInterval(() => {
        setPhase(steps[i].text);
        setScale(steps[i].size);

        i = (i + 1) % steps.length;
      }, 2000);
    } else {
      setPhase("Ready");
      setScale(1);
    }

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div style={styles.card}>
      <h3>Breathing Exercise 🌬️</h3>

      <div
        style={{
          ...styles.circle,
          transform: `scale(${scale})`,
          transition: "transform 2s ease-in-out",
        }}
      >
        <h2>{phase}</h2>
      </div>

      <button
        onClick={() => setActive(!active)}
        style={styles.button}
      >
        {active ? "Stop" : "Start"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "12px",
    backgroundColor: "#e3f2fd",
    textAlign: "center",
  },
  circle: {
    margin: "20px auto",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "#90caf9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: "10px 15px",
    marginTop: "10px",
    cursor: "pointer",
  },
};