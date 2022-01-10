require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      // Alchemy key used for deployment to Rinkeby
      url: process.env.STAGING_ALCHEMY_KEY,
      // metamask private key
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    // etherscan API key
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
