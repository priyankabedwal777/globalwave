import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomeBanner from "./Components/HomeBaner";
import WhoWeare from "./Components/WWR";
import Card from "./Components/Cards";
import Industries from "./Components/Industries";
import Challanges from "./Components/Challenges";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomeBanner />
        <WhoWeare />
        <Card />
        <Industries />
        <Challanges />
      </main>
    </div>
  );
}

export default App;
