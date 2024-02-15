import React from "react";
import { useState } from "react";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function App() {
  const [preloader, setPreloader] = React.useState(true);

  const handleClosePreloader = () => {
    setPreloader(false);
  };

  return (
    <div className="app">
      {preloader && <Preloader onClick={handleClosePreloader} />}
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
