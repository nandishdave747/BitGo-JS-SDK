const bitgo = require('./BitGoSystemConstant.js')();
bitgo.coin('tbtc').wallets().getTotalBalances()
.then(function (balances) {
  console.log(JSON.stringify(balances, null, 1));
});