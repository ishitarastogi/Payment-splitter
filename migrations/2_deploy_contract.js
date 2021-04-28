const Payment = artifacts.require("./PaymentSplitter.sol");
var addr=["0x3D97c3C7986Bd9eB24C37066E650cC7563184199","0x67e45FE748d5B76ED59E6400842170DE78318C80"];
var shares=[1,1];
module.exports = function (deployer) {
  deployer.deploy(Payment,addr, shares);
};
