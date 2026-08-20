import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Education,
  Recognition,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation
        parentToChild={{ mode }}
        modeChange={handleModeChange}
      />

      <FadeIn transitionDuration={500}>
        {/* Hero */}
        <Main />

        {/* Training / Expertise */}
        <Expertise />

        {/* Professional Experience */}
        <Timeline />

        {/* Selected Projects */}
        <Project />

        {/* Education */}
        <Education />

        {/* Awards & Volunteering */}
        <Recognition />

        {/* Contact */}
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
