import React from "react";

export function Bet({logo, title, volume, betUrl, coteOui, coteNon}){
    return (
        <button  className="w-80 flex flex-col space-y-2">
            <div className="h-12 pt-0 flex space-x-2 bg-white" >
                <div className="pl-2">
                <img
                    class="fit-picture relative w-full h-full rounded-full overflow-hidden" layout="fill" objectFit="cover"
                    src= {logo}
                    />
                </div>
                <p className="place-content-center">
                    {title}
                </p>
            </div>
            <div className = "mu-2 flex flex-col  rounded-lg">
                <div className="h-12 flex justify-between bg-black ">
                    <div className="place-content-center">
                        <p className="ml-2 place-content-center text-white ">
                            Name1
                        </p>
                    </div>
                    <div className="mr-6 place-content-center text-white">
                        {coteOui}
                    </div>
                </div>
                <div className="h-12 flex justify-between bg-red-600">
                    <div className="place-content-center">
                        <p className="ml-2 place-content-center text-black ">
                            Name2
                        </p>
                    </div>
                    <div className="mr-6 place-content-center">
                        {coteNon}
                    </div>
                </div>
            
            </div>
            <div className="h-6 pb-6 pt-2 flex mb-8 rounded-lg">

                <p className="ml-2 place-content-center">
                    ${volume} in Bet
                </p>  
            </div>


        

        </button>


    );
};
export default Bet;
