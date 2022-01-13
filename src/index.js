import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.global.css";
import Home from "./pages/Home";
import { Header } from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header name="Wesley" />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
