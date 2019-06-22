const bitgo = require('./BitGoSystemConstant.js')();
bitgo.session({}, function callback(err, session) {
  if (err) {
   
	console.dir(err);
  }
  console.dir(session);
});
