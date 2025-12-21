import { useState } from "react";
import { Button } from "./components/ui/button";
import Hero from "./pages/Hero";
import Header from "./layouts/Header";
import About from "./pages/About";
import Service from "./pages/Service";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Snowfall from "react-snowfall";

function App() {
  const [count, setCount] = useState(0);

  function add1() {
    setCount(count + 1);
  }

  // Check if current date is between December 1 and January 10
  const isSnowfallSeason = () => {
    const now = new Date();
    const month = now.getMonth(); 
    const day = now.getDate();

    return (month === 11) || (month === 0 && day <= 10);
  };

  return (
    <>
      {isSnowfallSeason() && (
        <Snowfall style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 9999, pointerEvents: 'none' }} />
      )}
      <div className="w-screen bg-mainBgColor min-h-screen tracking-tight overflow-x-hidden">
        <Header />
        <Hero />
        <About />
        <Service />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
