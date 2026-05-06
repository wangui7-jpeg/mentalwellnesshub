import React from "react";

/* 🌿 DATA */
const mentors = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    role: "Mental Health Coach",
    specialty: "Anxiety & Self-care",
    bio: "Helps young people manage anxiety and build healthy routines.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Otieno",
    role: "Life Coach",
    specialty: "Personal Growth",
    bio: "Focuses on goal setting, confidence, and mindset shifts.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Amina Hassan",
    role: "Wellness Therapist",
    specialty: "Stress & Mindfulness",
    bio: "Guides clients through mindfulness and emotional healing.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "David Mwangi",
    role: "Relationship Mentor",
    specialty: "Communication & Healing",
    bio: "Helps people navigate relationships and emotional balance.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

/* 🌿 COMPONENT */
export default function Mentorship() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🌿 Meet Your Mentors</h1>

      <div style={styles.grid}>
        {mentors.map((mentor) => (
          <div key={mentor.id} style={styles.card}>
            <img
              src={mentor.image}
              alt={mentor.name}
              style={styles.image}
            />

            <h3 style={styles.name}>{mentor.name}</h3>
            <p style={styles.role}>{mentor.role}</p>
            <p style={styles.specialty}>{mentor.specialty}</p>
            <p style={styles.bio}>{mentor.bio}</p>

            <button style={styles.button}>
              Connect 💬
            </button>
          </div>
        ))}
      </div>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },

  name: {
    margin: "5px 0",
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
    fontSize: "13px",
    color: "#777",
    marginTop: "5px",
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
};