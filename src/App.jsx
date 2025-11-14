import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomeBanner from "./Components/HomeBaner";

function App() {
  return (
    <>
      <div className="">
        <div className="fixed w-full z-10">
          <Navbar />
        </div>
        <div>
          <HomeBanner />
        </div>
      </div>
    </>
  );
}

export default App;
