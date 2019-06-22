const bitgo = require('./BitGoSystemConstant.js')();

if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[2] + process.argv[3]+' <url><user lable>');
  process.exit(-1);
}

var url = process.argv[2];
var lable = process.argv[3];

bitgo.coin('tbtc').webhooks().add({
  url: url,
  type: "block",
  label: lable,
  numConfirmations: 1
})
.then(function(result) {
  console.dir(result);
});