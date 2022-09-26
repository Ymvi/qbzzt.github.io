require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://eth-rinkeby.alchemyapi.io/v2/Vgkf_x1ZruUL5glIG--UkxnP6rvIpFtY",
       accounts: ["3b28f3a35fddb7ca78edfd59a5eac444e0e3024516778243d48f5a9432c7936f"]
    }
  }

};
