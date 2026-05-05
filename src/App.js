import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Mycarousel from "./components/Mycarousel";
import MoodCheckIn from "./components/MoodCheckIn";
import QuickJournal from "./components/QuickJournal";
import QuoteOfTheDay from "./components/QuoteOfTheDay";
import BreathingExercise from "./components/BreathingExercise";
import About from "./components/About";
import Mentorship from "./components/Mentorship";
import QuoteCarousel from "./components/QuoteCarousel";


import "bootstrap/dist/css/bootstrap.min.css";

/* 🌿 HOME PAGE */
function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        Mental Wellness Hub 🌿
      </h1>

      <Mycarousel />
      <MoodCheckIn />
      <QuickJournal />
      <QuoteOfTheDay />
      <BreathingExercise />
      <QuoteCarousel />
      

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Take a deep breath… you’re doing well 🌬️
      </p>
    </div>
  );
}

/* 🌿 MAIN APP */
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentorship" element={<Mentorship />} />
      </Routes>

      {/* ✅ Footer on ALL pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;