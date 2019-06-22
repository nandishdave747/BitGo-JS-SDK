const bitgo = require('./BitGoSystemConstant.js')();
if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[2] + ' <lable>');
  process.exit(-1);
}

var lable = process.argv[2];

bitgo.coin('teth').wallets()
.generateWallet({ label: lable, passphrase: 'secretpassphrase1a5df8380e0e30',enterprise:'5b6edf159c6f23940394445396c3d2c0'})
.then(function(wallet) {
  console.dir(wallet);
});