module MarketCreation {
    use std::vector;
    use sui::address;
    use sui::coin;
    use std::option;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct Market has key, store {
        id: u64,
        description: vector<u8>,   // String Description of market
        // the user that runs that creates the assertion in the OOV3, necessary to settle the market once it's ready.z
        // Weights for or against
        resolved: bool,            // Market is finished
        resolution_outcome: Option<bool>,   // Option because can be None, True or False
        assertion_id: Option<u64>,
        marketShares : Share,
        transaction : TransactionCap<Share>,
        stake: u64
    }

    // Coin for yes shares
    struct Share has drop {
        associated_market_id: u64,
        representation : bool
    }

    struct MarketManager has key, store {
        markets: vector<Market> // Bunch of Prediction Markets
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

    /**
    * @brief Create an empty market manager on startup
    */
    public fun initialize_market_manager(account: &signer) {
        let market_manager = MarketManager {
            markets: Vector::empty<Market>()
        };
        move_to(account, market_manager);
    }

    // TODO Mint Coin @ higher level
    public fun ShareInit(witness: Share, ctx: &mut TxContex){
        let (treasury, metadata) = coin::create_currency(witness, 0, b"PollShare", b"PS", b"", option::none(), ctx);
        transfer::public_freeze_object(metadata);
        trasury
        //coin::mint_and_transfer(&mut treasury, qty, tx_context::sender(ctx), ctx);
        //transfer::public_transfer(treasury, tx_context::sender(ctx))
    }
    /**
    * @brief Create a market
    */
    public fun initialize_market(
        signer: &signer,
        description: vector<u8>,
        outcome_yes: vector<u8>,
        outcome_no: vector<u8>,
        initialStake: u64,
        required_bond: u64,
        ctx: &mut TxContex
    ): u64 {
        assert!(description.length > 0, "empty description");
        assert!(outcome_yes.length > 0, "empty outcome yes");
        assert!(outcome_no.length > 0, "empty outcome no");
        assert!(outcome_no != outcome_yes, "same outcome")
        let market_id = Vector::length((u64)&borrow_global_mut<MarketManager>(Signer::address_of(signer)).markets);
        let market_share = Share{
            associated_market_id : market_id,
            representation : true,
        };
        let new_market = Market {
            id: market_id,
            description,
            outcome_yes,
            outcome_no,
            resolved: false,
            resolution_outcome: Option::none(),
            assertion_id: Option::none()
        };
        Vector::push_back(&mut borrow_global_mut<MarketManager>(Signer::address_of(signer)).markets, new_market);
        
        
        market_id
    }
}
