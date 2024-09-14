import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  function add1() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="w-screen bg-black h-screen flex">
        <div className="flex flex-col	gap-52 mx-auto items-center justify-center h-screen text-white">
          <h1 className="">TO BE CONTINUED...</h1>
          <h1>KYLA CAITLYN REYTA</h1>
        </div>
      </div>
    </>
  );
}

export default App;
