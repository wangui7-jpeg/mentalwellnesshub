import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import About from "./components/About";
import Mentorship from "./components/Mentorship";

import Mycarousel from "./components/Mycarousel";
import MoodCheckIn from "./components/MoodCheckIn";
import QuickJournal from "./components/QuickJournal";
import QuoteOfTheDay from "./components/QuoteOfTheDay";
import BreathingExercise from "./components/BreathingExercise";
import Chatbot from "./components/Chatbot";
import Profile from "./components/Profile";


import Addproduct from "./components/Addproduct";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Shop from "./components/Shop";

/* 🌿 HOME PAGE */
function Home() {
  return (
    <div style={homeStyles.page}>

      <section style={homeStyles.hero}>
        <h1>Mental Wellness Hub 🌿</h1>
        <p>Your safe space to breathe, reflect, and grow</p>
      </section>

      <Mycarousel />

      <div style={homeStyles.videoSection}>
        <h2 style={homeStyles.videoTitle}>🌿 Calm Mind Moment</h2>

        <video
          style={homeStyles.video}
          controls
          muted
          autoPlay
          loop
          playsInline
        >
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>

        <p style={homeStyles.videoText}>
          Pause… breathe… and reset your mind 💚
        </p>
      </div>

      <div style={homeStyles.grid}>
        <MoodCheckIn />
        <QuickJournal />
        <QuoteOfTheDay />
        <BreathingExercise />
      </div>

      <Chatbot />
    </div>
  );
}

/* 🌿 APP */
export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div style={layoutStyles.page}>
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* AUTH */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />

          {/* SHOP */}
          

          {/* ADD PRODUCT (ADMIN) */}
          <Route path="/sell" element={<Addproduct />} />

        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  );
}

/* 🌿 STYLES */
const layoutStyles = {
  page: {
    paddingTop: "90px",
    backgroundColor: "#F5FFFD",
    minHeight: "100vh",
  },
};

const homeStyles = {
  page: {
    backgroundColor: "#F5FFFD",
    minHeight: "100vh",
  },

  hero: {
    textAlign: "center",
    padding: "40px 20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },

  videoSection: {
    textAlign: "center",
    padding: "30px 20px",
  },

  videoTitle: {
    marginBottom: "15px",
    color: "#16A085",
    fontSize: "22px",
    fontWeight: "bold",
  },

  video: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "14px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    display: "block",
    margin: "0 auto",
  },

  videoText: {
    marginTop: "10px",
    color: "#555",
    fontSize: "15px",
  },
};