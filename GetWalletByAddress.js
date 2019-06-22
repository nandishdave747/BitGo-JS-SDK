if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[0] + ' ' + process.argv[1] + ' <wallet_address>');
  process.exit(-1);
}
let address = process.argv[2];
const bitgo = require('./BitGoSystemConstant.js')();
bitgo.coin('tbtc').wallets().getWalletByAddress({ address: address })
.then(function(wallet) {
  // print the wallet
  console.dir(wallet._wallet);
});