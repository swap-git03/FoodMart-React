import React from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Blog from "./components/Blog";
import PhoneSection from "./components/PhoneSection";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import "./components/food.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Blog />
      <PhoneSection />
      <Buttons />
      <Footer />
    </>
  );
}

export default App;
