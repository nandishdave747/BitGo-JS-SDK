const bitgo = require('./BitGoSystemConstant.js')();
if (process.argv.length < 4) {
  console.log('usage:\n\t' + process.argv[2]  + process.argv[3] + process.argv[4] +' <walletId><transactionID><otp>');
  process.exit(-1);
}

var walletId = process.argv[2];
var stuckTxId = process.argv[3];
var otp = process.argv[4];
var passphrase= 'secretpassphrase1a5df8380e0e30';
var newFeeRate = 30000; // new fee rate for the stuck transaction (satoshis per 1000 bytes)


bitgo.coin('tbtc').wallets().get({ id: walletId }, function(err, wallet) {
  
    if (err) {
      console.dir(err);
      throw new Error("Could not unlock!");
    }
	wallet.accelerateTransaction({ transactionID: stuckTxId, feeRate: newFeeRate, walletPassphrase: passphrase }, function(err, result) {
	console.dir(result);
	});
 });

// bitgo.coin('tbtc').wallets().get({ id: walletId }, function(err, wallet) {
  // bitgo.unlock({ otp: otp }, function(err) {
    // if (err) {
      // console.dir(err);
      // throw new Error("Could not unlock!");
    // }
    // wallet.accelerateTransaction({ transactionID: stuckTxId, feeRate: newFeeRate, walletPassphrase: passphrase }, function(err, result) {
      // console.dir(result);
    // });
  // });
// });