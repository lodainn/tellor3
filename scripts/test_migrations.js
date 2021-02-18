/*******************************************************************/

/**********TEST MIGRATIONS ***************************************/

/******************************************************************/
//Rinkby
tellorMaster = ''

//mainnet
//tellorMaster = ''

async function migrations(masterAddr, ) {
    // We get the contract to deploy
    const Tellor = await ethers.getContractFactory("Tellor");
    const tellor= await Tellor.deploy();

  }

  migrations(tellorMaster)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });