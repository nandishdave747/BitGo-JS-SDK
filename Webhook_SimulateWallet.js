const bitgo = require('./BitGoSystemConstant.js')();

if (process.argv.length < 5) {
  console.log('usage:\n\t' + process.argv[2] +process.argv[3] + process.argv[4]+ '<walletId><webhookId><transferId>');
  process.exit(-1);
}

var walletId = process.argv[2];
var webhookId = process.argv[3];
var transferId = process.argv[4];

bitgo.coin('tbtc').wallets().get({ id: walletId })
.then(function(wallet) {
  wallet.simulateWebhook({
    webhookId: webhookId,
    transferId: transferId
  })
  .then(function(result) {
    console.dir(result);
  });
});