import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomeBanner from "./Components/HomeBaner";
import WhoWeare from "./Components/WWR";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomeBanner />
        <WhoWeare />
      </main>
    </div>
  );
}

export default App;
