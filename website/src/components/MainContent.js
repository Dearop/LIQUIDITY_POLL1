import React from "react";

const MainContent = () => {
  return (
    <main className="bg-gradient-to-b from-gray-600 to-purple-500 text-white py-16 h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">All-in</h2>
        <p className="text-xl">Sui's Greatest Prevision Market</p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Your dream bet......"
            className="px-4 py-2 rounded-full text-black"
          />
        </div>
      </div>
      <section className="max-w-6xl mx-auto h-max">
        <h3 className="text-2xl font-bold mb-4">Trending</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg">Trending Item</div>
          <div className="bg-white p-4 rounded-lg">Trending Item</div>
          <div className="bg-white p-4 rounded-lg">Trending Item</div>
          <div className="bg-white p-4 rounded-lg">Trending Item</div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
