if (process.argv.length < 5) {
  console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <wallet_source_address> <wallet_destination_address> <amount>');
  process.exit(-1);
}

let address = process.argv[2];
const bitgo = require('./BitGoSystemConstant.js')();
bitgo.coin('teth').wallets().getWalletByAddress({ address: address })
 .then(function(wallet) {
	var amount = (parseFloat(process.argv[4] * 1000000000000000000)).toString(16);
	let params = {
		amount: amount,
		address: process.argv[3],
		walletPassphrase: 'secretpassphrase1a5df8380e0e30'
	};
	wallet.send(params)
	 .then(function(transaction) {
	  console.log(JSON.stringify(transaction, null, 1));
	  //console.dir(transaction);
	});

});