import React from "react";
import OurOption from "./Option";
import AMM from "./AMM";

export function AssetPage({ name, price }) {
    return (
        <main className="bg-gradient-to-b from-gray-600 to-purple-500 text-white py-12 h-screen">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">The name of the Prediction</h2>
            </div>
            <div className="space-y-2 ml-8 mr-8 mt-32">
                <div className="flex space-x-4">
                    <OurOption name="OPTION 1" price={price} />
                    <OurOption name="OPTION 2" price={price} />
                </div>
                <div className="grid grid-cols-6 gap-2">

                  <AMM price={price} />
                  <div className="shadow-xl border border-solid border-zinc-400 bg-gradient-to-b from-blockbg to-blockbg2 p-4 rounded-lg flex-grow col-span-4">
                      <h3 className="text-xl font-bold text-black ml-4 my-4 grid">Price History</h3>
                  </div>

                </div>
            </div>
        </main>
    );
};

export default AssetPage;
