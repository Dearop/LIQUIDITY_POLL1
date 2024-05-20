module MarketCreation {
    use std::vector;
    use sui::address;
    use std::signer;

    struct Market has key, store {
        id: u64,
        description: vector<u8>,   // String Description of market
        outcome_yes: u64,          // Yes Pool
        outcome_no: u64,           // No Pool
        reward: u64,                // The amount of currency that will be available as a reward for
        // the user that runs that creates the assertion in the OOV3, necessary to settle the market once it's ready.
        // Weights for or against
        yesWeight : u64,
        noWeight : u64,
        required_bond: u64,        // Money to transact to create Market
        resolved: bool,            // Market is finished
        resolution_outcome: Option<bool>,   // Option because can be None, True or False
        assertion_id: Option<u64>
    }

    struct MarketManager has key, store {
        markets: vector<Market> // Bunch of Prediction Markets
    }

    /**
    * @brief Create an empty market manager on startup
    */
    public fun initialize_market_manager(account: &signer) {
        let market_manager = MarketManager {
            markets: vector::empty<Market>()
        };
        move_to(account, market_manager);
    }

    /**
    * @brief Create a market
    */
    public fun initialize_market(
        signer: &signer,
        description: vector<u8>,
        reward: u64,
        required_bond: u64
    ): u64 {
        let market_id = vector::length((u64)&borrow_global_mut<MarketManager>(Signer::address_of(signer)).markets);
        let new_market = Market {
            id: market_id,
            description,
            outcome_yes: 0,
            outcome_no: 0,
            reward,
            // No double so we make the weights in percentage
            yesWeight : 100,
            noWeight : 100,
            required_bond,
            resolved: false,
            resolution_outcome: Option::none(),
            assertion_id: Option::none()
        };
        Vector::push_back(&mut borrow_global_mut<MarketManager>(Signer::address_of(signer)).markets, new_market);
        market_id
    }
}
