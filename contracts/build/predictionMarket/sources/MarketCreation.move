module predictionMarket::MarketCreation {
    use std::option::{none}; // Only necessary options imported
    use predictionMarket::Share::Share;

    public struct Market has key, store {
        id: UID,
        description: vector<u8>,   // String Description of market
        resolved: bool,            // Market is finished
        resolution_outcome: Option<bool>,   // Option because can be None, True or False
        marketShares: Share,
        stake: u64,
    }

    public struct MarketManager has key, store {
        id: UID,
        markets: vector<Market>, // Bunch of Prediction Markets
    }

    /// Create an empty market manager on startup
    public fun init_market_manager(ctx: &mut TxContext) {
        transfer :: transfer( MarketManager {
            id: object::new(ctx),
            markets: vector::empty<Market>(),
        } , tx_context::sender(ctx));
    }

    /// Create a market
    public fun init_market(
        ctx: &mut TxContext,
        description: vector<u8>,
        marketShares: Share,
        stake: u64
    ): Market {
        let id = object::new(ctx);
        Market {
            id,
            description,
            resolved: false,
            resolution_outcome: none(),
            marketShares,
            stake,
        }
    }
    public fun add_market(
        manager: &mut MarketManager,
        market: Market,
    ) {
        vector::push_back(&mut manager.markets, market);
    }
}
