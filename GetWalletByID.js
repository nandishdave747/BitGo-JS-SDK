if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <wallet_id>');
  process.exit(-1);
}

let walletId = process.argv[2];
const bitgo = require('./BitGoSystemConstant.js')();
bitgo.coin('tbtc').wallets().get({ id: walletId })
.then(function(wallet) {
  // print the wallet
  console.dir(wallet._wallet);
});