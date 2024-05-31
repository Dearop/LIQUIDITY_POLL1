module predictionMarket::MarketCreation {
    use std::option::{none}; // Only necessary options imported
    use predictionMarket::Share::Share;

    const COMMISSION_PERCENT: u64 = 5;

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

    /// Add markets to market Manager
    public fun add_market(
        manager: &mut MarketManager,
        market: Market,
    ) {
        vector::push_back(&mut manager.markets, market);
    }

    /// Sell shares from seller to buyer
    public fun sell(
        market: &mut Market,
        shares_to_sell: u64,
        price_per_share: u64,
        seller: Address,
        buyer: Address,
        ctx: &mut TxContext
    ) {
        let total_cost = shares_to_sell * price_per_share;
        let commission = total_cost * COMMISSION_PERCENT / 100;
        let seller_receives = total_cost - commission;

        // Ensure the seller has enough shares to sell
        let mut seller_shares = 0;
        for(share in &market.marketShares) {
            if(share.owner == seller) {
                seller_shares = seller_shares + 1;
            }
        };

        // Transfer the shares from seller to buyer
        let mut transferred_shares = vector::empty<Share>();
        let mut remaining_shares_to_sell = shares_to_sell;
        for (i in 0..vector::length(&market.marketShares)) {
            if (remaining_shares_to_sell == 0) {
                break;
            };
            if (market.marketShares[i].owner == seller) {
                vector::push_back(&mut transferred_shares, market.marketShares[i]);
                market.marketShares[i].owner = buyer;
                remaining_shares_to_sell = remaining_shares_to_sell - 1;
            };
        };

        // Transfer SUI from buyer to seller and commission account
        transfer::transfer_sui(seller, seller_receives);
        transfer::transfer_sui(market.commission_account, commission);
    }
}
