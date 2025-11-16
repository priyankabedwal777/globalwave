import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomeBanner from "./Components/HomeBaner";
import WhoWeare from "./Components/WWR";
import Card from "./Components/Cards";
import Industries from "./Components/Industries";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomeBanner />
        <WhoWeare />
        <Card />
        <Industries />
      </main>
    </div>
  );
}

export default App;
