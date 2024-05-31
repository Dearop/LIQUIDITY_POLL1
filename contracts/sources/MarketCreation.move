module predictionMarket::MarketCreation {
    use std::vector;
    use sui::address;
    use sui::coin;
    use std::option;
    use sui::transfer;
    use sui::tx_context;

    public struct Market has key, store {
        id: UID,
        description: vector<u8>,   // String Description of market
        // the user that runs that creates the assertion in the OOV3, necessary to settle the market once it's ready.z
        // Weights for or against
        resolved: bool,            // Market is finished
        resolution_outcome: Option<bool>,   // Option because can be None, True or False
        assertion_id: Option<u64>,
        marketShares : Share,
        transaction : TransactionCap<Share>,
        stake: u64,
        outcome : bool
    }

    // Coin for yes shares


    public struct MarketManager has key, store {
        id : UID,
        markets: vector<Market> // Bunch of Prediction Markets
    }

    /**
    * @brief Create an empty market manager on startup
    */
    public fun initialize_market_manager(account: &signer) {
        let market_manager = MarketManager {
            markets: vecset::empty<Market>()
        };
        move_to(account, market_manager);
    }

    /**
    * @brief Create a market
    */
    public fun initialize_market(
        signer: &signer,
        description: vector<u8>,
        outcome : bool,
        initialStake: u64,
        required_bond: u64,
        ctx: &mut TxContext
    ): u64 {
        let market_id = vector::length((u64)&borrow_global_mut<MarketManager>(Signer::address_of(signer)).markets);
        let market_share = predictionMarket::Share{
            associated_market_id : market_id,
            representation : true,
        };
        predictionMarket::Share::init(market_share, ctx);
        let new_market = Market {
            id: market_id,
            description,
            outcome,
            resolved: false,
            resolution_outcome: option::none(),
            assertion_id: option::none()
        };
        Vector::push_back(&mut borrow_global_mut<MarketManager>(Signer::address_of(signer)).markets, new_market);
        market_id
    }
}
