require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stomach radar prefer protect inner praise army gather'; 
let testAccounts = [
"0x3522b17fa255fc91c1e40c993500e0bc4948ff4d7ddb929025e2509c4d753154",
"0xae6d25eeb6a32cc85b6b0defc4fad77a93202383e615d6371d9d4475097e8bfe",
"0xb54f7edf456f2dc213934fc88ce57ad5ac3c2dcaa87639c61d9ff889189099ad",
"0x87bae29dfe78b961f125be888db17b61f9b4f6034bc051fb644f9cd76cded658",
"0xfc76dae6a8eb5965ca1c554a6d0a67b3ad6a457f058b95ee478a17e9d38a48d8",
"0xb90033df0bca750a13a8ae989d0bceb457c33118ade4302ecf4df37503925aa6",
"0x45d2c4eab6d231c667891ff72c923c64f3a98473b9f56883b3b91b680290a497",
"0x7448af3570939f2ebfd7668172a4f86a803b840e57ce84ea9a99c77c7408f9d6",
"0x8b45c9598c348206095293f50d251fdd33a42d1beedab1256d488652359edbe2",
"0x3513b7df76d0920d14d31d163b28cc20ec2c53c815252e161c467ec6c4a8edef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

