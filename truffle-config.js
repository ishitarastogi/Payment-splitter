require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

process.env.UV_THREADPOOL_SIZE = 128;



module.exports = {
  networks: {
   
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: '4',
      networkCheckTimeout: 999999,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
}