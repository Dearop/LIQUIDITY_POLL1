import React from "react";

export function Bet({logo, title, volume, coteOui, coteNon}){
    return (
        <button  className="border border-solid border-zinc-400 bg-grid rounded-lg">
            <div className="grid grid-cols-3 gap-4 m-1">
                <div className="bg-transparent rounded-lg">
                    <img src={logo} alt="logo" className="w-16 h-16 rounded-full"/>
                </div>
                <div className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg rounded-lg col-span-2">
                    <h3 className>{title}</h3>
                </div>
            </div>


            <div className = "bg-transparent p-1 rounded-lg flex-grow grid grid-rows-2 gap-2 m-1">
                <div className="rounded-lg grid grid-cols-3 gap-2">
                    <h3 className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg col-span-2 p-1 rounded-lg text-white text text-black text-left">Yes</h3>
                    <h3 className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg p-1 rounded-lg text-white text text-black hover:bg-green-400">{coteOui}</h3>
                </div>
                <div className="rounded-lg grid grid-cols-3 gap-2">
                    <h3 className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg col-span-2 p-1 rounded-lg text-white text text-black text-left gap-2">Non</h3>
                    <h3 className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg p-1 rounded-lg text-white text text-black hover:bg-green-400">{coteNon}</h3>
                </div>
            </div>


            <div className="bg-transparent border border-zinc-400/[0.8] border-rounded-lg p-2 rounded-lg m-1">
                <h1 className="text-white text-sm text-black">Market volume: {volume}</h1>
            </div>
        </button>


    );
};
export default Bet;
