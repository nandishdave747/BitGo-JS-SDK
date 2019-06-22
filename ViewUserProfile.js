const bitgo = require('./BitGoSystemConstant.js')();
bitgo.me({}, function callback(err, user) {
  if (err) {
    console.dir(err);
  }
  console.dir(user);
});