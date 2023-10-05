# GNSS Web3

GNSS Ethereum Contracts ABIs

## Install 

```bash
npm add @mgxs/web3
```

## Usage

```ts
// ABIs
import {
  CONTRACT_MINT_ADDRESS,
  CONTRACT_REVEAL_ADDRESS,
  MINT,
  REVEAL,
} from "@mgxs/web3";

const CONTRACTS = {
  mint: {
    address: CONTRACT_MINT_ADDRESS,
    abi: MINT,
  },
  reveal: { address: CONTRACT_REVEAL_ADDRESS, abi: REVEAL },
};
```
