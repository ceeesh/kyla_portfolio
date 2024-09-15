import { useState } from "react";
import { Button } from "./components/ui/button";
import Hero from "./pages/Hero";
import Header from "./layouts/Header";

function App() {
  const [count, setCount] = useState(0);

  function add1() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="w-screen bg-mainBgColor h-screen">
        <Header/>
       <Hero/>
      </div>
    </>
  );
}

export default App;
