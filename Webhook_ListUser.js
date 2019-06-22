const bitgo = require('./BitGoSystemConstant.js')();

bitgo.coin('tbtc').webhooks().list()
.then(function(result) {
  console.dir(result);
});