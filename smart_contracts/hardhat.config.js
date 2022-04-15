require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/iTgTipP23YB9tKFlSZcJUW7NDI5JlUNS',
      accounts: ['016068ac286dfcd5dbbc1f8164cff9f37f6c3c4571a175ca02574bcba98a1cac'],
    },
  },
};