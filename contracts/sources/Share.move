module predictionMarket::Share{
    use std::vector;
    use sui::address;
    use sui::coin;
    use std::option;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    public struct Share has drop {
        associated_market_id: u64,
        representation : bool
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

    // TODO Mint Coin @ higher level
    public fun ShareInit(witness: Share, ctx: &mut TxContex){
        let (treasury, metadata) = coin::create_currency(witness, 0, b"PollShare", b"PS", b"", option::none(), ctx);
        transfer::public_freeze_object(metadata);
        trasury
        //coin::mint_and_transfer(&mut treasury, qty, tx_context::sender(ctx), ctx);
        //transfer::public_transfer(treasury, tx_context::sender(ctx))
    }
}
