require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config({path:__dirname+'/.env'})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0"
      },
      {
        version: "0.7.1"
      }
    ]
  },
  networks: {
    hardhat: {
      loggingEnabled: true
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.MUMBAI_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: "SM17I4QGAGE51ZPNZ91QZ51NSEGMEKAS43",
  },

};
