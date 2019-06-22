const bitgo = require('./BitGoSystemConstant.js')();

if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[2] + ' <url>');
  process.exit(-1);
}

var url = process.argv[2];

bitgo.coin('tbtc').webhooks().remove({
  url: url,
  type: "block"
})
.then(function(result) {
  console.dir(result);
});