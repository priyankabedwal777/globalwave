import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomeBanner from "./Components/HomeBaner";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomeBanner />
      </main>
    </div>
  );
}

export default App;
