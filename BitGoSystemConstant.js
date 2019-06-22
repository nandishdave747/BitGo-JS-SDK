var bitgo = function() {

	const BitGoJS = require('bitgo');
	
	const bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: 'v2x39bb281bb7f4c4a0828df7d8952c5607f41091fa23ef0fde9cfa6bd6460335ef' });
	
	return bitgo;
};
module.exports = bitgo;

module.exports.WEBHOOK_URL = 'https://test.bitgo.com/';