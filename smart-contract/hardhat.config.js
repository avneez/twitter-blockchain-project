require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks:{
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/EBx9CzSu5AC7D47myB_dd-XhvETDS8-C',
      accounts: ['c7d00e150d2160ae170e9024e4a9ff61bd29008cb675246762d1263d8990b06a'],
    },
  },
}
