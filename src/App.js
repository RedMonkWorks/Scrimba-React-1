import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MainContent />
      </header>
    </div>
  );
}

export default App;
