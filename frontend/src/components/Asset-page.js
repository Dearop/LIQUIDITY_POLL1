import React from "react"

const AssetPage = ({name, price, option1, option2}) => {
    return (
        <main className="bg-gradient-to-b from-gray-600 to-purple-500 text-white py-12 h-screen">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">The name of your predicition</h2>             
            </div>

            <div className="space-y-2 ml-8 mr-8 mt-32">
                <div className="flex space-x-4">
                    <div className="shadow-xl border border-solid border-zinc-400 bg-gradient-to-b from-blockbg to-blockbg2 p-4 rounded-lg flex-grow">
                        <h3 className="text-xl font-bold text-black ml-4 my-4">Option 1</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-400/[0.8] p-4 rounded-lg hover:bg-green-500">
                                Buy
                            </div> 
                            <div className="bg-zinc-400/[0.8] p-4 rounded-lg hover:bg-red-500">
                                Sell
                            </div> 
                            <div className="bg-zinc-400/[0.8] p-4 rounded-lg">
                                Price: 
                            </div>
                            <div className="">
                                <input
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                          event.preventDefault();
                                        }
                                      }}
                                    type="text"
                                        placeholder="Amount"
                                        className="bg-zinc-400/[0.8] py-4 pl-7 pr-4 w-full rounded-lg text-black"
                                />
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div className="shadow-xl border border-solid border-zinc-400 bg-gradient-to-b from-blockbg to-blockbg2 p-4 rounded-lg flex-grow">
                        <h3 className="text-xl font-bold text-black ml-4 my-4">Option 1</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-400/[0.8] p-4 rounded-lg hover:bg-green-500">
                                Buy
                            </div> 
                            <div className="bg-zinc-400/[0.8] p-4 rounded-lg hover:bg-red-500">
                                Sell
                            </div> 
                            <div className="bg-zinc-400/[0.8] p-4 rounded-lg">
                                Price: 
                            </div>
                            <div className="">
                                <input
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                          event.preventDefault();
                                        }
                                      }}
                                    type="text"
                                        placeholder="Amount"
                                        className="bg-zinc-400/[0.8] py-4 pl-7 pr-4 w-full rounded-lg text-black"
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="shadow-xl border border-solid border-zinc-400 bg-gradient-to-b from-blockbg to-blockbg2 p-4 rounded-lg flex-grow"> 
                    <h3 className="text-xl font-bold text-black ml-4 my-4">Price History</h3>
                    
                    </div>
            </div>
        </main>
    );
};
export default AssetPage;