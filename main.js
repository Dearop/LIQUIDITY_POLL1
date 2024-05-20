const suiSdk = require('@mysten/sui.js');
const { PullServiceClient } = require('./path-to-your-downloaded-library');  // Adjust the path as necessary
const { fromB64 } = require('@mysten/bcs');

// Configuration
const address = 'testnet-dora-2.supra.com';
const pairIndexes = [0, 21, 61, 49];
const chainType = 'sui';
const rpcUrl = suiSdk.getFullnodeUrl('testnet');
const suiClient = new suiSdk.SuiClient({ url: rpcUrl });
// add Contract Address
const contractAddress = '<YOUR_CONTRACT_ADDRESS>';
// Wallet of Poll 
const privateKey = '<YOUR_PRIVATE_KEY_BASE64>';

async function fetchProofAndCallContract() {
    // Create an instance of the PullServiceClient
    const client = new PullServiceClient(address);

    // Fetch proof data from the gRPC server
    const response = await client.getProofData(pairIndexes, chainType);

    // Create the transaction object
    const txb = new suiSdk.TransactionBlock();
    txb.moveCall({
        target: `${contractAddress}::pull_example::get_pair_price`,
        arguments: [
            txb.pure(response.dkg_object),
            txb.pure(response.oracle_holder_object),
            txb.pure(response.bytes_proof, "vector<u8>")
        ]
    });

    // Sign the transaction with the private key
    const keypair = suiSdk.Ed25519Keypair.fromSecretKey(fromB64(privateKey));
    const signer = new suiSdk.RawSigner(keypair, suiClient);

    // Execute the transaction
    const result = await signer.signAndExecuteTransactionBlock({
        transactionBlock: txb
    });

    console.log('Transaction result:', result);
}

fetchProofAndCallContract().catch(console.error);
