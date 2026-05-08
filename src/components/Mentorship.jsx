import React, { useState } from "react";

/* 🌿 DATA */
const mentors = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    role: "Mental Health Coach",
    specialty: "Anxiety & Self-care",
    bio: "Helps young people manage anxiety and build healthy routines.",
    email: "sarah@wellness.com",
    phone: "+254700111222",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Otieno",
    role: "Life Coach",
    specialty: "Personal Growth",
    bio: "Focuses on goal setting, confidence, and mindset shifts.",
    email: "james@wellness.com",
    phone: "+254711222333",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Amina Hassan",
    role: "Wellness Therapist",
    specialty: "Stress & Mindfulness",
    bio: "Guides clients through mindfulness and emotional healing.",
    email: "amina@wellness.com",
    phone: "+254722333444",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "David Mwangi",
    role: "Relationship Mentor",
    specialty: "Communication & Healing",
    bio: "Helps people navigate relationships and emotional balance.",
    email: "david@wellness.com",
    phone: "+254733444555",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

/* 🌿 COMPONENT */
export default function Mentorship() {
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>🌿 Meet Your Mentors</h1>

      {/* 🌿 GRID */}
      <div style={styles.grid}>
        {mentors.map((mentor) => (
          <div key={mentor.id} style={styles.card}>

            <img
              src={mentor.image}
              alt={mentor.name}
              style={styles.image}
            />

            <h3>{mentor.name}</h3>
            <p style={styles.role}>{mentor.role}</p>
            <p style={styles.specialty}>{mentor.specialty}</p>

            <button
              style={styles.button}
              onClick={() => setSelectedMentor(mentor)}
            >
              Connect 💬
            </button>

          </div>
        ))}
      </div>

      {/* 🌿 POPUP */}
      {selectedMentor && (
        <div style={styles.overlay}>
          <div style={styles.modal}>

            <h2 style={{ color: "#16A085" }}>
              {selectedMentor.name}
            </h2>

            <p><strong>Role:</strong> {selectedMentor.role}</p>
            <p><strong>Specialty:</strong> {selectedMentor.specialty}</p>
            <p style={styles.bio}>{selectedMentor.bio}</p>

            <p><strong>Email:</strong> {selectedMentor.email}</p>
            <p><strong>Phone:</strong> {selectedMentor.phone}</p>

            <a
              href={`mailto:${selectedMentor.email}`}
              style={styles.contactBtn}
            >
              Email Mentor 📧
            </a>

            <button
              style={styles.closeBtn}
              onClick={() => setSelectedMentor(null)}
            >
              Close ✖
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

/* 🌿 STYLES */
const styles = {
  page: {
    padding: "100px 20px",
    backgroundColor: "#F5FFFD",
    minHeight: "100vh",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#16A085",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },

  role: {
    color: "#16A085",
    fontWeight: "bold",
  },

  specialty: {
    fontSize: "14px",
    color: "#555",
  },

  bio: {
    fontSize: "14px",
    color: "#555",
    marginTop: "10px",
  },

  button: {
    marginTop: "10px",
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  /* 🌿 MODAL */
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "400px",
  },

  contactBtn: {
    display: "block",
    marginTop: "10px",
    backgroundColor: "#2980B9",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    textDecoration: "none",
    textAlign: "center",
  },

  closeBtn: {
    marginTop: "10px",
    width: "100%",
    backgroundColor: "#E74C3C",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};