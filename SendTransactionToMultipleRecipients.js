if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <wallet_source_address>');
  process.exit(-1);
}

let address = process.argv[2];
const bitgo = require('./BitGoSystemConstant.js')();
bitgo.coin('tbtc').wallets().getWalletByAddress({ address: address })
 .then(function(wallet) {
 
	let params = {
	recipients: [
		{
		  amount: 0.01 * 1e8,
		  address: '2N47owzbJoraSWsmzHL6K933AuShUVpHAFy',
		},
		{
		  amount: 0.001 * 1e8,
		  address: '2N22nNPoRjUvGKQftKnWRtJcBHn4eFEqEgP',
		}
	],
	walletPassphrase: 'secretpassphrase1a5df8380e0e30'
	};
	
	wallet.sendMany(params)
	.then(function(transaction) {
	  // print transaction details
	  console.dir(transaction);
	});

});