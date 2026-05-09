import { useEffect, useState } from "react";
import Loader from "./Loader";

import Mycarousel from "./Mycarousel";
import MoodCheckIn from "./MoodCheckIn";
import QuickJournal from "./QuickJournal";
import QuoteOfTheDay from "./QuoteOfTheDay";
import BreathingExercise from "./BreathingExercise";
import Chatbot from "./Chatbot";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div style={homeStyles.page}>

      {/* HERO */}
      <section style={homeStyles.hero}>
        <div style={homeStyles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
            alt="Mental Wellness"
            style={homeStyles.heroImage}
          />
        </div>

        <div style={homeStyles.heroContent}>
          <div style={homeStyles.textCard}>
            <h1 style={homeStyles.heroTitle}>
              Heal, Reflect & Grow 🌿
            </h1>

            <p style={homeStyles.heroText}>
              Your safe space for mindfulness, emotional healing,
              journaling, and personal growth.
            </p>

            <button style={homeStyles.heroButton}>
              Begin Your Journey ✨
            </button>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <div style={homeStyles.carouselWrapper}>
        <Mycarousel />
      </div>

      {/* WELLNESS TOOLS */}
      <section style={homeStyles.section}>
        <h2 style={homeStyles.heading}>Wellness Tools 💚</h2>

        <div style={homeStyles.grid}>
          <div style={homeStyles.card}><MoodCheckIn /></div>
          <div style={homeStyles.card}><QuickJournal /></div>
          <div style={homeStyles.card}><QuoteOfTheDay /></div>
          <div style={homeStyles.card}><BreathingExercise /></div>
        </div>
      </section>

      {/* CHATBOT */}
      <Chatbot />

    </div>
  );
}

/* STYLES */
const homeStyles = {
  page: { backgroundColor: "#F5FFFD", minHeight: "100vh" },

  hero: {
    minHeight: "90vh",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px",
    gap: "40px",
    background: "linear-gradient(to right, #E8F8F5, #FDFEFE)",
  },

  imageContainer: { flex: 1, minWidth: "320px" },

  heroImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "25px",
  },

  heroContent: {
    flex: 1,
    minWidth: "320px",
    display: "flex",
    justifyContent: "center",
  },

  textCard: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "25px",
    maxWidth: "550px",
  },

  heroTitle: { fontSize: "48px", color: "#138D75" },

  heroText: { color: "#555", marginTop: "10px" },

  heroButton: {
    marginTop: "15px",
    padding: "12px 25px",
    backgroundColor: "#16A085",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  carouselWrapper: { padding: "30px" },

  section: { padding: "40px 20px" },

  heading: {
    textAlign: "center",
    color: "#16A085",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "15px",
  },
};