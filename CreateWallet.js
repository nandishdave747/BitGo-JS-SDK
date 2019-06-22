const bitgo = require('./BitGoSystemConstant.js')();
bitgo.coin('tbtc').wallets()
.generateWallet({ label: 'Wallet3', passphrase: 'secretpassphrase1a5df8380e0e30' })
.then(function(wallet) {
  
  console.dir(wallet);
});