import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Section1 from "./components/Section";
import Slider from "./components/Slider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Section1 />
    <Slider />
  </React.StrictMode>
);
