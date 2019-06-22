const bitgo = require('./BitGoSystemConstant.js')();
if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[2] + ' <numBlocks>');
  process.exit(-1);
}

var numBlocks = process.argv[2];
bitgo.coin('tbtc').feeEstimate({ numBlocks: numBlocks }, function callback(err, res) {
  console.dir(res);
});