const bitgo = require('./BitGoSystemConstant.js')();
if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[2] + ' <walletId>');
  process.exit(-1);
}

var walletId = process.argv[2];
let params = {
    numUnspentsToMake: 2,
    minValue: 100000,
    maxValue: 47000000,
    minHeight: 1,
    minConfirms: 2,
    limit: 100,
    walletPassphrase: 'secretpassphrase1a5df8380e0e30'
};

bitgo.coin('tbtc').wallets().get({ id: walletId })
.then(function(wallet) {
	wallet.consolidateUnspents(params)
	.then(function(transactionInfo) {
		console.dir(transactionInfo);
	});
});
