import React from "react"

export default function AssetPage({}) => {
    return (
        <main className="bg-gradient-to-b from-gray-600 to-purple-500 text-white py-16 h-screen">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">The name of your predicition</h2>    //call api                          
            </div>
            <section className="max-w-6xl mx-auto h-max">
                <div className="grid grid-row-2 gap-8">
                    //start buy
                    <div className="bg-white p-4 rounded-lg">
                        <h3>Buy</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg hover: bg-white-100">
                                Option1
                            </div> //call api

                            <div className="bg-white p-4 rounded-lg hover: bg-white-100">
                                Option2
                            </div> // call api  
                            <div className="bg-transparent p-4 rounded-lg">
                                Price
                            </div> //check how to opacity + call api
                            <div className="bg-transparent p-4 rounded-lg">
                                Amount
                            </div> //call api (availability + send api)
                        </div>
                    </div>
                    //end buy 
                    
                    //start sell
                    <div className="bg-white p-4 rounded-lg">
                        <h3>Sell</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg hover: bg-white-100">
                                Option1
                            </div> //call api

                            <div className="bg-white p-4 rounded-lg hover: bg-white-100">
                                Option2
                            </div> // call api  
                            <div className="bg-transparent p-4 rounded-lg">
                                Price
                            </div> //check how to opacity + call api
                            <div className="bg-transparent p-4 rounded-lg">
                                Amount
                            </div> //call api (availability + send api)
                        </div>
                    </div>
                    //end sell 
                </div>
            </section>

            <section className="max-w-6xl mx-auto h-max"> 
            //price history (bonne blague)
            </section>
        </main>
    );
};
export default AssetPage;