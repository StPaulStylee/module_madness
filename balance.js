var getNum = require('./random');
var toUSD = require('./dollarValue');

exports.totalUSD = function() {
  return toUSD(getNum(100, 1000000));
}

exports.balance = function() {
  return 'Account balance: \n';
}
