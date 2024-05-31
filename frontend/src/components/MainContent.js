import React from "react";
import Bet from "./Bet";
import { BetData } from "./BetData";
import BetElement from "./BetElement"
import log from "./logo.png"

export function MainContent(handleClick1){
  
  const betList = BetData.map(bet => <div className="w-96 flex space-x-8"><BetElement logo={bet.logo}
                                          title={bet.title}
                                          volume={bet.volume}
                                          coteNon={bet.coteNon}
                                          coteOui={bet.coteOui}
                                          handleClick1={handleClick1}/>
                                           </div>);


  return (
    <main className="bg-gradient-to-b from-gray-600 to-purple-500 text-white py-16 h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">All-in</h2>
        <image src={log} alt="logo" />
        <p className="text-xl">Sui's Greatest Prevision Market</p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Your dream bet......"
            className="px-4 py-2 rounded-full text-black"
          />
        </div>
      </div>
      <section className="max-w-6xl mx-36 h-max ">
        <h3 className="text-2xl font-bold mb-4">Trending</h3>
        <div className="flex flew-row items-stretch space-x-8">
          {betList[0]}
          {betList[1]}
          {betList[2]}
          {betList[3]}
        </div>
          
        
      </section>
    </main>
  );
};

export default MainContent;
