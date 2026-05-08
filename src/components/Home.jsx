import Mycarousel from "./Mycarousel";
import MoodCheckIn from "./MoodCheckIn";
import QuickJournal from "./QuickJournal";
import QuoteOfTheDay from "./QuoteOfTheDay";
import BreathingExercise from "./BreathingExercise";
import Mentorship from "./Mentorship";

export default function Home() {
  return (
    <div style={homeStyles.page}>

      {/* 🌿 HERO SECTION */}
      <section style={homeStyles.hero}>

        {/* 🌿 LEFT IMAGE */}
        <div style={homeStyles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
            alt="Mental Wellness"
            style={homeStyles.heroImage}
          />
        </div>

        {/* 🌿 RIGHT CONTENT */}
        <div style={homeStyles.heroContent}>

          <div style={homeStyles.textCard}>

            <h1 style={homeStyles.heroTitle}>
              Heal, Reflect & Grow 🌿
            </h1>

            <p style={homeStyles.heroText}>
              Your safe space for mindfulness,
              emotional healing, journaling,
              and personal growth.
            </p>

            <button style={homeStyles.heroButton}>
              Begin Your Journey ✨
            </button>

          </div>

        </div>

      </section>

      {/* 🌿 MAIN CAROUSEL */}
      <div style={homeStyles.carouselWrapper}>
        <Mycarousel />
      </div>

      {/* 🌿 WELLNESS TOOLS */}
      <section style={homeStyles.section}>

        <h2 style={homeStyles.heading}>
          Wellness Tools 💚
        </h2>

        <div style={homeStyles.grid}>

          <div style={homeStyles.card}>
            <MoodCheckIn />
          </div>

          <div style={homeStyles.card}>
            <QuickJournal />
          </div>

          <div style={homeStyles.card}>
            <QuoteOfTheDay />
          </div>

          <div style={homeStyles.card}>
            <BreathingExercise />
          </div>

        </div>

      </section>

      {/* 🌿 MENTOR SECTION */}
      <section style={homeStyles.section}>

        <h2 style={homeStyles.heading}>
          Connect With Mentors 🌱
        </h2>

        <div style={homeStyles.mentorWrapper}>
          <Mentorship />
        </div>

      </section>

      {/* 🌿 COMMUNITY SECTION */}
      <section style={homeStyles.communitySection}>

        <h2 style={homeStyles.communityTitle}>
          You Are Never Alone 💚
        </h2>

        <p style={homeStyles.communityText}>
          Join a growing wellness community focused
          on healing, mindfulness, emotional growth,
          and self-care.
        </p>

      </section>

    </div>
  );
}

/* 🌿 HOME STYLES */
const homeStyles = {
  page: {
    backgroundColor: "#F5FFFD",
    minHeight: "100vh",
  },

  /* 🌿 HERO */
  hero: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    padding: "50px",
    background:
      "linear-gradient(to right, #E8F8F5, #FDFEFE)",
    flexWrap: "wrap",
  },

  /* 🌿 IMAGE */
  imageContainer: {
    flex: 1,
    minWidth: "320px",
  },

  heroImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "25px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },

  /* 🌿 RIGHT CONTENT */
  heroContent: {
    flex: 1,
    minWidth: "320px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  /* 🌿 POP TEXT CARD */
  textCard: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "25px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    maxWidth: "550px",
  },

  heroTitle: {
    fontSize: "55px",
    color: "#138D75",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  heroText: {
    fontSize: "20px",
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "25px",
  },

  heroButton: {
    padding: "14px 30px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#16A085",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  /* 🌿 CAROUSEL */
  carouselWrapper: {
    padding: "40px 20px 20px",
  },

  /* 🌿 GENERAL SECTION */
  section: {
    padding: "50px 20px",
  },

  heading: {
    textAlign: "center",
    color: "#16A085",
    marginBottom: "35px",
    fontSize: "34px",
  },

  /* 🌿 GRID */
  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
  },

  /* 🌿 TOOL CARDS */
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },

  /* 🌿 MENTORS */
  mentorWrapper: {
    marginTop: "20px",
  },

  /* 🌿 COMMUNITY */
  communitySection: {
    margin: "40px 20px",
    padding: "60px 25px",
    textAlign: "center",
    borderRadius: "25px",
    background:
      "linear-gradient(to right, #D1F2EB, #E8F8F5)",
  },

  communityTitle: {
    color: "#138D75",
    fontSize: "38px",
    marginBottom: "20px",
  },

  communityText: {
    color: "#555",
    fontSize: "18px",
    lineHeight: "1.8",
    maxWidth: "750px",
    margin: "0 auto",
  },
};