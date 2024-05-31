import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import BetLogic from "./components/BetElement";
import { useState } from "react";


const App = () => {

  const [showOwnPage, setShowOwnPage] = useState(false);

  function handleClick() {
    setShowOwnPage(true);
  }



  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div>
        {showOwnPage ? test : <MainContent handleClick1 = {handleClick}/>}
        </div>
        
      
        
      <Footer />
    </div>
  );
};



export default App;
