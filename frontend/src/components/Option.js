import React, { useRef } from 'react';

const Option = ({ name, price }) => {
    const amountRef = useRef(null);

    const calculateTotal = () => {
        const amount = amountRef.current ? amountRef.current.value : 0;
        return price * amount;
    };

    return (
        <div className="shadow-xl border border-solid border-zinc-400 bg-gradient-to-b from-blockbg to-blockbg2 p-4 rounded-lg flex-grow">
            <h3 className="text-xl font-bold text-black ml-4 my-4">{name}</h3>
            <div className="grid grid-cols-2 gap-4">
                <button className="bg-zinc-400/[0.8] p-4 rounded-lg hover:bg-green-500">
                    Buy
                </button>
                <button className="bg-zinc-400/[0.8] p-4 rounded-lg hover:bg-red-500">
                    Sell
                </button>
                <div className="bg-zinc-400/[0.8] p-4 rounded-lg">
                    Price: {price}
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
                        ref={amountRef}
                        className="bg-zinc-400/[0.8] py-4 pl-7 pr-4 w-full rounded-lg text-black"
                    />
                </div>
                <div className="bg-zinc-400/[0.8] p-4 rounded-lg text-center">
                    Total: {calculateTotal()}
                </div>
            </div>
        </div>
    );
};

export default Option;
