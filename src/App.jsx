import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Probleme from "./Components/Probleme";
import Solution from "./Components/Solution";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-amber-50 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Probleme />
      <Solution />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
