import React from "react";

const mentors = [
  {
    name: "Dr. Amina",
    specialty: "Anxiety & Stress",
  },
  {
    name: "John Mwangi",
    specialty: "Life Coaching",
  },
  {
    name: "Sarah Kim",
    specialty: "Depression Support",
  },
];

export default function Mentorship() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        Find a Mentor 🌿
      </h1>

      <div style={styles.container}>
        {mentors.map((mentor, index) => (
          <div key={index} style={styles.card}>
            <h3>{mentor.name}</h3>
            <p>{mentor.specialty}</p>

            <button style={styles.button}>
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: "#1bbee7",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};