import React from "react";

export function Bet({logo, title, volume, coteOui, coteNon}){
    return (
        <button  className="border border-solid border-zinc-400 bg-grid rounded-lg">
            <div className="grid grid-cols-8 gap-2 m-4">
                <div className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg rounded-lgls-3 gap-4 m-4 text-3xl cols-span-3">
                    <h3 className>Prediction</h3> 
                </div>
            </div>


            <div className = "bg-transparent p-1 rounded-lg flex-grow grid grid-rows-2 gap-2 m-1">
                <div className="rounded-lg grid grid-cols-3 gap-2">
                    <h3 className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg col-span-2 p-1 rounded-lg text-white text-2xl text-black text-left">Yes</h3>
                    <h3 className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg p-1 rounded-lg text-white text text-black text-2xl hover:bg-green-400">0.5</h3>
                </div>
                <div className="rounded-lg grid grid-cols-3 gap-2">
                    <h3 className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg col-span-2 p-1 rounded-lg text-white text-black text-2xl text-left gap-2">Non</h3>
                    <h3 className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg p-1 rounded-lg text-white text-2xl text-black hover:bg-green-400">0.5</h3>
                </div>
            </div>


            <div className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg p-2 rounded-lg m-1">
                <h1 className="text-white text-sm text-black">Market volume: {volume}</h1>
            </div>
        </button>


    );
};
export default Bet;
