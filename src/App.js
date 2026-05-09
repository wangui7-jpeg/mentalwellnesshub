import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Mentorship from "./components/Mentorship";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import Addproducts from "./components/Addproducts";
import Checkout from "./components/Checkout";
import Chatbot from "./components/Chatbot";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/checkout" element={<Checkout />} />                                                    
        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  );
}