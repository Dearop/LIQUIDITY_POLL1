module predictonMarket::SupraOracleIntegration {
    use std::vector;
    use sui::tx_context::TxContext;
    use sui::event;
    use supra_validator::validator::DkgState;
    use supra_holder::svalue_feed_holder::OracleHolder;
    use supra_holder::price_data_pull;

    struct PricePair has copy, drop, store {
        pair: u32,
        price: u128,
        decimal: u16,
        round: u64,
    }

    struct EmitPrice has copy, drop {
        price_pairs: vector<PricePair>
    }

    entry fun get_pair_price(
        dkg_state: &DkgState,
        oracle_holder: &mut OracleHolder,
        vote_smr_block_round: vector<vector<u8>>,
        vote_smr_block_timestamp: vector<vector<u8>>,
        vote_smr_block_author: vector<vector<u8>>,
        vote_smr_block_qc_hash: vector<vector<u8>>,
        vote_smr_block_batch_hashes: vector<vector<vector<u8>>>,
        vote_round: vector<u64>,
        min_batch_protocol: vector<vector<u8>>,
        min_batch_txn_hashes: vector<vector<vector<u8>>>,
        min_txn_cluster_hashes: vector<vector<vector<u8>>>,
        min_txn_sender: vector<vector<u8>>,
        min_txn_protocol: vector<vector<u8>>,
        min_txn_tx_sub_type: vector<u8>,
        scc_data_hash: vector<vector<u8>>,
        scc_pair: vector<vector<u32>>,
        scc_prices: vector<vector<u128>>,
        scc_timestamp: vector<vector<u128>>,
        scc_decimals: vector<vector<u16>>,
        scc_qc: vector<vector<u8>>,
        scc_round: vector<u64>,
        scc_id: vector<vector<u8>>,
        scc_member_index: vector<u64>,
        scc_committee_index: vector<u64>,
        batch_idx: vector<u64>,
        txn_idx: vector<u64>,
        cluster_idx: vector<u64>,
        sig: vector<vector<u8>>,
        pair_mask: vector<vector<bool>>,
        _ctx: &mut TxContext,
    ) {
        let price_datas = price_data_pull::verify_oracle_proof(
            dkg_state,
            oracle_holder,
            vote_smr_block_round,
            vote_smr_block_timestamp,
            vote_smr_block_author,
            vote_smr_block_qc_hash,
            vote_smr_block_batch_hashes,
            vote_round,
            min_batch_protocol,
            min_batch_txn_hashes,
            min_txn_cluster_hashes,
            min_txn_sender,
            min_txn_protocol,
            min_txn_tx_sub_type,
            scc_data_hash,
            scc_pair,
            scc_prices,
            scc_timestamp,
            scc_decimals,
            scc_qc,
            scc_round,
            scc_id,
            scc_member_index,
            scc_committee_index,
            batch_idx,
            txn_idx,
            cluster_idx,
            sig,
            pair_mask,
            _ctx,
        );

        let price_pairs = vector::empty<PricePair>();

        while (!vector::is_empty(&price_datas)) {
            let price_data = vector::pop_back(&mut price_datas);
            let (cc_pair_index, cc_price, cc_decimal, cc_round) = price_data_pull::price_data_split(&price_data);
            vector::push_back(&mut price_pairs, PricePair { pair: cc_pair_index, price: cc_price, decimal: cc_decimal, round: cc_round });
        }
        event::emit(EmitPrice { price_pairs });
    }
}
