import React from "react";
import reactLogo from "../images/logo192.png";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <div className="brand-nav">
        <img src={reactLogo} alt="React Logo" />
        <h3>ReactFacts</h3>
      </div>
      <h4>RedMonk Works</h4>
    </nav>
  );
}
