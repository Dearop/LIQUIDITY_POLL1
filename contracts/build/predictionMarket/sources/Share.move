module predictionMarket::Share{
    use std::vector;
    use sui::address;
    use sui::coin::{Self, Coin, TreasuryCap};
    use std::option;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    public struct Share has drop, store {
        associated_market_id: u64,
        representation: bool
    }

    // Define the one-time witness type
    public struct SHARE has drop {}

    // TODO Mint Coin @ higher level
    fun init(witness: SHARE, ctx: &mut TxContext){
        let (treasury, metadata) = coin::create_currency(witness, 6, b"PollShare", b"PS", b"", option::none(), ctx);
        transfer::public_freeze_object(metadata);
        transfer::public_transfer(treasury, tx_context::sender(ctx))
    }

    public fun mint(
        treasury_cap: &mut TreasuryCap<Share>,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext,
    ) {
        let coin = coin::mint(treasury_cap, amount, ctx);
        transfer::public_transfer(coin, recipient)
    }
}
