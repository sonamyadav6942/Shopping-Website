import React from "react";
import Header from "./Header";
import Section from "./components/Section";
import Slider from "./Slider";
import Products from "./Products";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Slider />
      <Products />
    </div>
  );
}

export default App;
