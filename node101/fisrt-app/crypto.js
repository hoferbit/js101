const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('123456');

console.log(hash.digest('hex'));