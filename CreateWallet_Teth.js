const bitgo = require('./BitGoSystemConstant.js')();
bitgo.coin('teth').wallets()
.generateWallet({ label: 'Wallet2', passphrase: 'secretpassphrase1a5df8380e0e30', enterprise: '5b6edf159c6f23940394445396c3d2c0' })
.then(function(wallet) {
  
  console.dir(wallet);
});