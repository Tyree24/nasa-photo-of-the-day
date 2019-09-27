import React from "react";
import "./App.css";
import Header from "./Components/Header.js";
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoContainer />
      <Footer />
    </div>
  );
}

export default App;
