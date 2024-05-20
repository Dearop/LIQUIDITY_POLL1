import React from "react";

const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">All-in</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700">
          Bets
        </a>
        <button className="bg-black text-white px-4 py-2 rounded">
          Connect Wallet
        </button>
      </nav>
    </header>
  );
};

export default Header;
