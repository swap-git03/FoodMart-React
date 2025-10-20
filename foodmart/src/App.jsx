/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Blog from "./components/Blog";
import PhoneSection from "./components/PhoneSection";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import "./components/food.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Create the context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Navbar />
        <ContactForm />
        <Blog />
        <PhoneSection />
        <Buttons />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
