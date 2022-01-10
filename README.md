# Boilerplate for backend smart contract for NFT mining 
**only works on Rinkeby**
Ensure connected wallet is a Rinkeby wallet

Deploying to Rinkeby Testnet: 
```shell 
npx hardhat run scripts/deploy.js --network rinkeby
```

Testing & Development: 
```shell 
npx hardhat run scripts/run.js
```

THREE most important steps: 
After any changes to contracts,
1. Redeploy contract using deploy command above to Blockchain
2. Update contract address in App.js on frontend (used by frontend to access smart contract impl)
3. Update ABI file (utils JSON file) on frontend

ABI JSON file found in artifacts/contracts/{$smart_contract_filename}.sol folder
Copy-paste to frontend 