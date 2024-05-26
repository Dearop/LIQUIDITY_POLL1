import React from "react";
import Option from "./Option";
import ChartV2 from "./ChartV2";

const AssetPage = ({ name, price }) => {
  return (
    <main className="bg-gradient-to-b from-gray-600 to-purple-500 text-white py-12 h-screen">
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
          {/* <ChartV2 /> */}
        </div>
      </div>
    </main>
  );
};

export default AssetPage;
