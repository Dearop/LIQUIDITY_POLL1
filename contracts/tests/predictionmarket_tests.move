script {
    use 0x00ded131b8985021492908b35ef53b6a4057a46c85f6f0966f83f799bde4fcea::Share::{SHARE, init, mint};
    use sui::tx_context::TxContext;

    fun main(account: &signer, ctx: &mut TxContext) {
        // Create a new SHARE object
        let witness = SHARE {};
        let (treasury_cap, coin_metadata) = init(witness, ctx);

        // Mint new shares
        let amount = 1000;
        let recipient = @0xf5fd002140cfcd24d6dec224c5145387b9992b6da04d12d45555b27da063cd17;
        mint(&mut treasury_cap, amount, recipient, ctx);
    }
}