const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const First = await ethers.getContractFactory('First');
  const first = await First.deploy();

  console.log("First deployed to:", first.address);
  const SecondContract = await ethers.getContractFactory('Second');
  const secondContract = await SecondContract.deploy(first.address);

  console.log("SecondContract deployed to:", secondContract.address);

  await first.setNumber(123);
  console.log("first number:", (await first.getNumber()).toString());

  await first.setString("h1");
  console.log("first string:", await first.getString());

  await secondContract.setNumber(456);
  console.log("secondContract number:", (await secondContract.getNumber()).toString());

  await secondContract.setString("h2");
  console.log("secondContract string:", await secondContract.getString());

  const value = ethers.utils.parseEther('1.0');

  await first.sendEther(secondContract.address, value, {value: ethers.utils.parseEther("1.0")});

  console.log("first balance:", ethers.utils.formatEther(await ethers.provider.getBalance(first.address)));
  console.log("secondContract balance:", ethers.utils.formatEther(await ethers.provider.getBalance(secondContract.address)));
}

main().catch(console.error);
