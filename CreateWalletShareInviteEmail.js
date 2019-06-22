const bitgo = require('./BitGoSystemConstant.js')();

if (process.argv.length < 4) {
  console.log('usage:\n\t' + process.argv[2] +process.argv[2] +' <walletId><email>');
  process.exit(-1);
}

var walletId =process.argv[2];
var receiverUser =process.argv[3];
var senderPassword ='secretpassphrase1a5df8380e0e30';

bitgo.coin('tbtc').wallets().get({ "id": walletId })
.then(function(wallet) {
  wallet.shareWallet({
    email: receiverUser,
    walletPassphrase: senderPassword,
    permissions: 'view,spend',
    skipKeychain: false
  })
  .then(function(result) {
    console.dir(result);
  });
});