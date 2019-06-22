const bitgo = require('./BitGoSystemConstant.js')();
if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[2] + ' <lable>');
  process.exit(-1);
}

var lable = process.argv[2];

bitgo.coin('txlm').wallets()
.generateWallet({ label: lable, passphrase: 'secretpassphrase1a5df8380e0e30' })
.then(function(wallet) {
  console.dir(wallet);
});