import React, { useState } from 'react';

const Option = ({ name, price = 100 }) => {
    const [Amount, SetAmount] = useState(3);

    const calculateTotal = () => {
        return price * Amount;
    };

    const handleAmountChange = (event) => {
        const value = event.target.value;
        if (/^[0-9]*$/.test(value)) {
            if (value != null){
                SetAmount(Number(value));
            }
        }
    };

    const handleBuyClick = () => {
        if (Amount !== 0) {
            alert(`Buying ${Amount} units of ${name} at price ${price} for a total of ${calculateTotal()}`);
        }
    };

    const handleSellClick = () => {
        if (Amount !== 0) {
            alert(`Selling ${Amount} units of ${name} at price ${price} for a total of ${calculateTotal()}`);
        }
    };

    return (
        <div className="shadow-xl border border-solid border-zinc-400 bg-gradient-to-b from-blockbg to-blockbg2 p-4 rounded-lg flex-grow">
            <h3 className="text-white text-xl font-bold text-black ml-4 my-4">{name}</h3>
            <div className="grid grid-cols-2 gap-4">
                <button
                    className="bg-violet-400/[0.8] p-4 rounded-lg hover:bg-green-500"
                    onClick={handleBuyClick}
                    style={{ color: 'yellow' }}
                >
                    Buy
                </button>
                <button
                    className="bg-violet-400/[0.8] p-4 rounded-lg hover:bg-red-500"
                    onClick={handleSellClick}   
                    style={{ fontWeight: 'bold', color: 'yellow'
                    }}

                >
                    Sell
                </button>
                <div className="bg-violet-400/[0.8] p-4 rounded-lg">
                    Price: {price}
                </div>
                <div className="">
                    <input
                        type="text"
                        placeholder="Amount"
                        value={Amount}
                        onChange={handleAmountChange}
                        className="bg-zinc-300/[0.8] py-4 pl-7 pr-4 w-full rounded-lg text-black"
                    />
                </div>
                <div className="bg-violet-400/[0.8] p-4 rounded-lg text-center">
                    Total: {calculateTotal()}
                </div>
            </div>
        </div>
    );
};

export default Option;
