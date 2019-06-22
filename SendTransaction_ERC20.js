if (process.argv.length < 5) {
 console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <wallet_source_id> <wallet_destination_address> <amount>');
 process.exit(-1);
}

let walletId = process.argv[2];
const bitgo = require('./BitGoSystemConstant.js')();
bitgo.coin('terc').wallets().get({ id: walletId })
.then(function(wallet) {
let tmpAmount = process.argv[4] ;
let params = {
amount: tmpAmount+'',
address: process.argv[3],
walletPassphrase: 'secretpassphrase1a5df8380e0e30'
};
wallet.send(params)
.then(function(transaction) {
 console.log(JSON.stringify(transaction, null, 1));
 //console.dir(transaction);
});

});


// npm uninstall ethereumjs-wallet
// npm uninstall truffle-hdwallet-provider
// npm install --save ethereumjs-wallet@0.6.0
// npm install --save truffle-hdwallet-provider@0.0.3