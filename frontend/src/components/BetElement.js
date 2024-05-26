import { useState } from 'react';
import React from 'react';
import AssetPage from './Asset-page';
import Option from './Option';




const Component = () => {
    

    return betIcon(superHandleClick);

    
    function superHandleClick() {
        return BetPage("bite", 134);
}
}

export default Component;






function betIcon(click){
    

    function handleClick(){
        click
    }

    return(
        <button className="w-80 flex flex-col space-y-2" onClick={handleClick}>
            <div className="h-12 pt-0 flex space-x-2 bg-white" >
                <div className="pl-2">
                <img
                    class="fit-picture relative w-full h-full rounded-full overflow-hidden" layout="fill" objectFit="cover"
                    src='null'
                    />
                </div>
                <p className="place-content-center">
                    titre
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
                        test
                    </div>
                </div>
                <div className="h-12 flex justify-between bg-red-600">
                    <div className="place-content-center">
                        <p className="ml-2 place-content-center text-black ">
                            Name2
                        </p>
                    </div>
                    <div className="mr-6 place-content-center">
                        test
                    </div>
                </div>
            
            </div>
            <div className="h-6 pb-6 pt-2 flex mb-8 rounded-lg">

                <p className="ml-2 place-content-center">
                    $ in Bet
                </p>  
            </div>
        </button>
    )
}

function BetPage(name, price){
    return(<main className="bg-gradient-to-b from-gray-600 to-purple-500 text-white py-12 h-screen">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">The name of your prediction</h2>
                </div>

                <div className="space-y-2 ml-8 mr-8 mt-32">
                    <div className="flex space-x-4">
                        <Option name="Option 1" price={price} />
                        <Option name="Option 2" price={price} />
                    </div>
                    <div className="shadow-xl border border-solid border-zinc-400 bg-gradient-to-b from-blockbg to-blockbg2 p-4 rounded-lg flex-grow">
                        <h3 className="text-xl font-bold text-black ml-4 my-4">Price History</h3>
                    </div>
                </div>
            </main>
    )
}




