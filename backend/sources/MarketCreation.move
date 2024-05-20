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
        outcome_yes: vector<u8>,          // Yes Proposition
        outcome_no: vector<u8>,           // No Proposition
        // the user that runs that creates the assertion in the OOV3, necessary to settle the market once it's ready.z
        // Weights for or against
        required_bond: u64,        // Money to transact to create Market
        resolved: bool,            // Market is finished
        resolution_outcome: Option<bool>,   // Option because can be None, True or False
        assertion_id: Option<u64>
    }

    struct YesShare has drop {
        id: u64,
        associated_market_id: u64
    }

    struct NoShare has drop {
        id: u64,
        associated_market_id: u64
    }

    struct MarketManager has key, store {
        markets: vector<Market> // Bunch of Prediction Markets
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

    /**
    * @brief Create a market
    */
    public fun initialize_market(
        signer: &signer,
        description: vector<u8>,
        outcome_yes: vector<u8>,
        outcome_no: vector<u8>,
        initialStake: u64,
        required_bond: u64
    ): u64 {
        let market_id = Vector::length((u64)&borrow_global_mut<MarketManager>(Signer::address_of(signer)).markets);
        let new_market = Market {
            id: market_id,
            description,
            outcome_yes,
            outcome_no,
            reward,
            required_bond,
            resolved: false,
            resolution_outcome: Option::none(),
            assertion_id: Option::none()
        };
        Vector::push_back(&mut borrow_global_mut<MarketManager>(Signer::address_of(signer)).markets, new_market);
        market_id
    }
}
