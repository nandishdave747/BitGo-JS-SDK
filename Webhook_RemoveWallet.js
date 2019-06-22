const bitgo = require('./BitGoSystemConstant.js')();
if (process.argv.length < 4) {
  console.log('usage:\n\t' + process.argv[2] +  process.argv[2] + ' <walletId><url>');
  process.exit(-1);
}

var walletId = process.argv[2];
var url = process.argv[3];

bitgo.coin('tbtc').wallets().get({ id: walletId })
.then(function(wallet) {
  return wallet.removeWebhook({
    url: url,
    type: "transfer"
  });
})
.then(function(result) {
  console.dir(result);
});