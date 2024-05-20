module predictionMarket::MarketResolution {

    use sui::signer;
    use std::vector;
    use sui::address;

    public fun assert_market(signer: &signer, market_id: u64, asserted_outcome: vector<u8>) {
        let market = &mut borrow_global_mut<MarketCreation::MarketManager>(Signer::address_of(signer)).markets[market_id];
        assert(!market.resolved, 1); // Market already resolved

        // Assert market outcome using UMA Oracle
        let assertion_id = UMAOracle::assert_market(signer, market_id, asserted_outcome);
        market.assertion_id = Option::some(assertion_id);
    }

    public fun resolve_market(signer: &signer, market_id: u64) {
        let market = &mut borrow_global_mut<MarketCreation::MarketManager>(Signer::address_of(signer)).markets[market_id];
        assert(!market.resolved, 1); // Market already resolved
        assert(Option::is_some(&market.assertion_id), 2); // Market not asserted

        // Settle the market outcome using UMA Oracle
        let assertion_id = Option::extract(market.assertion_id);
        let outcome = UMAOracle::settle_assertion(signer, assertion_id);
        market.resolved = true;
        market.resolution_outcome = Option::some(outcome);

        // Logic to distribute rewards based on outcome (omitted for simplicity)
    }

    public fun claim_reward(signer: &signer, market_id: u64) {
        let market = &borrow_global<MarketCreation::MarketManager>(Signer::address_of(signer)).markets[(usize) market_id];
        assert(market.resolved, 2); // Market not resolved

        // Logic to claim rewards (omitted for simplicity)
    }
}
