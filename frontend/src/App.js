import React from "react";
import Header from "./components/Header";
import MainContent from "./components/Asset-page";
import Footer from "./components/Footer";
import BetLogic from "./components/BetElement";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BetLogic/>
      <Footer />
    </div>
  );
};

export default App;
