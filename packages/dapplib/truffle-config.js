require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food warm riot ranch prosper install screen army genre'; 
let testAccounts = [
"0x50ed0eac681b145f8a183ce639b9a1a4e94cbbae58543c56f59f3f2eac78b79b",
"0x7ad786d32b486acdb23f16e1c42cd27f7131914c2a16817d5a44c37b77f94ce0",
"0x88e9b5b80b10dad0ce7b382785b0fdb51aae6cf3268d5097caaf62daf42bbcee",
"0x9f4bbd84085d2a9811a3b88be4d3262da23e0e66ba4afb0588ce89ce50759e71",
"0x865d52d32fa85796b2a06c4c40be187550599a7124edc4fcf3c35e7704c7b1a7",
"0x63b373d42dcc366cc9c4cc80738bca8a060f4c9fd874fe2fdfafc826c0b82c91",
"0xae5311a06d250a9487c7c48ce1d4ad2e093f71b4260599fa628110a484c731da",
"0xbff5508b0542e43316fb6a6a019bb10c0ffdb7ed6c2e968e88752ca66b31370b",
"0x2bc46381ffe4becff26e06df30495f2762fc547b29e4ab2c34195f35ce529a2a",
"0xa1a06a51499b1da49b0b7331bff7c4e471774571f8c4a016534fd633cc0e8f70"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


