import React from "react";
import TinderCard from "react-tinder-card";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;