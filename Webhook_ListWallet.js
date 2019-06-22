const bitgo = require('./BitGoSystemConstant.js')();
if (process.argv.length < 1) {
  console.log('usage:\n\t' + process.argv[2] + ' <walletId>');
  process.exit(-1);
}

var walletId = process.argv[2];
bitgo.coin('tbtc').wallets().get({ id: walletId })
.then(function(wallet) {
  return wallet.listWebhooks();
})
.then(function(webhooks) {
  console.dir(webhooks);
});