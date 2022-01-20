//https://eth-ropsten.alchemyapi.io/v2/Ps7oT26nDIxGJuF7rmkVpNuaXz4QCMlU

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Ps7oT26nDIxGJuF7rmkVpNuaXz4QCMlU",
      accounts: [
        "91cead5e5b7790f6271b4d8486867eb29728b39d1ae57528a958dc76afc74207"
      ]
    }
  }
};
