import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import BetLogic from "./components/BetElement";
import { useState } from "react";
import { BetData } from "./components/BetData";



const betList = BetData.map(bet => <div className="w-96 flex space-x-8"><BetLogic logo={bet.logo}
                                          title={bet.title}
                                          volume={bet.volume}
                                          coteNon={bet.coteNon}
                                          coteOui={bet.coteOui}/>
                                           </div>);


const App = () => {

  let i = 1; 


  const betList = BetData.map(bet => <div className="w-96 flex space-x-8"><BetLogic logo={bet.logo}
                                          title={bet.title}
                                          volume={bet.volume}
                                          coteNon={bet.coteNon}
                                          coteOui={bet.coteOui}/>
                                           </div>);

  const [showOwnPage1, setShowOwnPage1] = useState(false);
  const [showOwnPage2, setShowOwnPage2] = useState(false);
  const [showOwnPage3, setShowOwnPage3] = useState(false);
  const [showOwnPage4, setShowOwnPage4] = useState(false);


  function handleClick1(){
    setShowOwnPage1(true);
  }
  function handleClick2(){
    setShowOwnPage2(true);
  }
  function handleClick3(){
    setShowOwnPage3(true);
  }
  function handleClick4(){
    setShowOwnPage4(true);
  }



  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div>
        {showOwnPage ? <BetLogic/> : <MainContent/>}
        </div>
        
      

      <Footer />
    </div>
  );
};



export default App;
