const bitgo = require('./BitGoSystemConstant.js')();


if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[2] +' <shareId>');
  process.exit(-1);
}
var shareId =process.argv[2];

bitgo.coin('tbtc').wallets().resendShareInvite({ walletShareId: shareId })
.then(function(share) {
  console.dir(share);
});