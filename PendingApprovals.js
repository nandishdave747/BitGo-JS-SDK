const bitgo = require('./BitGoSystemConstant.js')();
if (process.argv.length < 3) {
  console.log('usage:\n\t' + process.argv[2] + ' <walletId>');
  process.exit(-1);
}

var walletId = process.argv[2];
var walletId = '5b68209cf700a6c0035424511e7961f1';
bitgo.coin('tbtc').wallets().get({ "id": walletId }, function callback(err, wallet) {
  if (err) { throw err; }
  // Sets the policy
  var rule = {
    id: "test1",
    type: "allTx"
    action: { type: "getApproval" },
    condition: {
      "type": "velocity",
      "amount": 101*1e8,
      "timeWindow": 24 * 60 * 60,
      "groupTags": [
        ":tag"
      ],
      "excludeTags": []
    }
  };
  wallet.setPolicyRule(rule, function callback(err, wallet) {
    if (err) { throw err; }
    console.dir(wallet.admin.policy);
  });
});