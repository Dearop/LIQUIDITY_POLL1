import React from "react";
import Bet from "./Bet";
const bet =  {logo: "test",
                 title: "test", 
                 volume: "test",
                 betUrl: "test",
                coteOui: "test", 
                coteNon: "test"

            }

 export function BetPage(){
    return (
      
      <main className="bg-gradient-to-b from-gray-600 to-purple-500 text-white h-screen">
        <div className="h-16 bg-white border flex">
            
            <button className="ml-6 text-black">
                Domain1
            </button>
            <button className="text-black ml-6">
                Domain2
            </button>
            <button className="text-black ml-6">
                Domain3
            </button>
            <button className="text-black ml-6">
                Domain4
            </button>
            <button className="text-black ml-8">
                Domain5
            </button>
        </div>
        
        
            <div className="space-y-2 ml-8 mr-8 mt-32">
                <div className="flex flew-row items-stretch space-x-8">
                    <Bet {...{logo: "test",
                        title: "test", 
                        volume: "test",
                        betUrl: "test",
                        coteOui: "test", 
                        coteNon: "test"}}/>

                    <Bet {...{logo: "test",
                        title: "test", 
                        volume: "test",
                        betUrl: "test",
                        coteOui: "test", 
                        coteNon: "test"}}/>
                        <Bet {...{logo: "test",
                        title: "test", 
                        volume: "test",
                        betUrl: "test",
                        coteOui: "test", 
                        coteNon: "test"}}/>

                    <Bet {...{logo: "test",
                        title: "test", 
                        volume: "test",
                        betUrl: "test",
                        coteOui: "test", 
                        coteNon: "test"}}/>
                </div>
                <div className="flex flew-row">
                    <div className="bg-white p-4 rounded-lg">Trending Item</div>
                    <div className="bg-white p-4 rounded-lg">Trending Item</div>
                </div>
                
            </div>
        







      </main>
    );
  };

 