import React from "react";

export function Bet({logo, title, volume, coteOui, coteNon}){
    return (
        <button  className="border border-solid border-zinc-400 bg-zinc-200 rounded-lg">
            <div className="grid grid-cols-2 gap-4 m-1">
                <div className="bg-zinc-300 rounded-lg">
                    <img src={logo} alt="logo" className="w-16 h-16 rounded-full"/>
                </div>
                <div className="bg-zinc-300 rounded-lg">
                    <h3 className>{title}</h3>
                </div>
            </div>


            <div className = "bg-gradient-to-b from-blockbg to-blockbg2 p-4 rounded-lg flex-grow grid grid-cols-2 gap-4 m-1">
                <div className="bg-zinc-400/[0.8] p-4 rounded-lg hover:bg-green-400">
                    <h3 className="text-white text text-black">Yes</h3>
                    <p className="text-white text text-black">{coteOui}</p>
                </div>
                <div className="bg-zinc-400/[0.8] p-4 rounded-lg hover:bg-red-400">
                    <h3 className="text-white text text-black">No</h3>
                    <p className="text-white text text-black">{coteNon}</p>
                </div>
            </div>


            <div className="bg-zinc-400/[0.8] p-4 rounded-lg m-1">
                <h1 className="text-white text text-black">{volume}</h1>
            </div>
        </button>


    );
};
export default Bet;
