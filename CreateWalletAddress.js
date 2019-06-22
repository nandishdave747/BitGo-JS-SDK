const bitgo = require('./BitGoSystemConstant.js')();

var walletId = process.argv[2];
bitgo.coin('tbtc').wallets().get({ "id": walletId }, function callback(err, wallet) {
  if (err) {
    throw err;
  }
  wallet.createAddress({ "chain": 0 }, function callback(err, address) {
    console.dir(address);
  });
});