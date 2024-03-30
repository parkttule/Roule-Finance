/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MyToken,
  MyTokenInterface,
} from "../../../contracts/rouleToken.sol/MyToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601181526020017f526f756c6546696e616e6365546f6b656e0000000000000000000000000000008152506040518060400160405280600381526020017f524654000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000365565b508060049081620000a1919062000365565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200044c565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200016d57607f821691505b60208210810362000183576200018262000125565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ed7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620001ae565b620001f98683620001ae565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000246620002406200023a8462000211565b6200021b565b62000211565b9050919050565b6000819050919050565b620002628362000225565b6200027a62000271826200024d565b848454620001bb565b825550505050565b600090565b6200029162000282565b6200029e81848462000257565b505050565b5b81811015620002c657620002ba60008262000287565b600181019050620002a4565b5050565b601f8211156200031557620002df8162000189565b620002ea846200019e565b81016020851015620002fa578190505b6200031262000309856200019e565b830182620002a3565b50505b505050565b600082821c905092915050565b60006200033a600019846008026200031a565b1980831691505092915050565b600062000355838362000327565b9150826002028217905092915050565b6200037082620000eb565b67ffffffffffffffff8111156200038c576200038b620000f6565b5b62000398825462000154565b620003a5828285620002ca565b600060209050601f831160018114620003dd5760008415620003c8578287015190505b620003d4858262000347565b86555062000444565b601f198416620003ed8662000189565b60005b828110156200041757848901518255600182019150602085019450602081019050620003f0565b8683101562000437578489015162000433601f89168262000327565b8355505b6001600288020188555050505b505050505050565b611057806200045c6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f191461016857806370a08231146101845780638da5cb5b146101b457806395d89b41146101d2578063a9059cbb146101f0578063dd62ed3e14610220576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610250565b6040516100c39190610c3f565b60405180910390f35b6100e660048036038101906100e19190610cfa565b6102e2565b6040516100f39190610d55565b60405180910390f35b610104610305565b6040516101119190610d7f565b60405180910390f35b610134600480360381019061012f9190610d9a565b61030f565b6040516101419190610d55565b60405180910390f35b61015261033e565b60405161015f9190610e09565b60405180910390f35b610182600480360381019061017d9190610cfa565b610347565b005b61019e60048036038101906101999190610e24565b6103e5565b6040516101ab9190610d7f565b60405180910390f35b6101bc61042d565b6040516101c99190610e60565b60405180910390f35b6101da610453565b6040516101e79190610c3f565b60405180910390f35b61020a60048036038101906102059190610cfa565b6104e5565b6040516102179190610d55565b60405180910390f35b61023a60048036038101906102359190610e7b565b610508565b6040516102479190610d7f565b60405180910390f35b60606003805461025f90610eea565b80601f016020809104026020016040519081016040528092919081815260200182805461028b90610eea565b80156102d85780601f106102ad576101008083540402835291602001916102d8565b820191906000526020600020905b8154815290600101906020018083116102bb57829003601f168201915b5050505050905090565b6000806102ed61058f565b90506102fa818585610597565b600191505092915050565b6000600254905090565b60008061031a61058f565b90506103278582856105a9565b61033285858561063d565b60019150509392505050565b60006012905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ce90610f67565b60405180910390fd5b6103e18282610731565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805461046290610eea565b80601f016020809104026020016040519081016040528092919081815260200182805461048e90610eea565b80156104db5780601f106104b0576101008083540402835291602001916104db565b820191906000526020600020905b8154815290600101906020018083116104be57829003601f168201915b5050505050905090565b6000806104f061058f565b90506104fd81858561063d565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6105a483838360016107b3565b505050565b60006105b58484610508565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106375781811015610627578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161061e93929190610f87565b60405180910390fd5b610636848484840360006107b3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106af5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106a69190610e60565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107215760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107189190610e60565b60405180910390fd5b61072c83838361098a565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107a35760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161079a9190610e60565b60405180910390fd5b6107af6000838361098a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036108255760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161081c9190610e60565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108975760006040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161088e9190610e60565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610984578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161097b9190610d7f565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109dc5780600260008282546109d09190610fed565b92505081905550610aaf565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a68578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610a5f93929190610f87565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610af85780600260008282540392505081905550610b45565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ba29190610d7f565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610be9578082015181840152602081019050610bce565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c1182610baf565b610c1b8185610bba565b9350610c2b818560208601610bcb565b610c3481610bf5565b840191505092915050565b60006020820190508181036000830152610c598184610c06565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c9182610c66565b9050919050565b610ca181610c86565b8114610cac57600080fd5b50565b600081359050610cbe81610c98565b92915050565b6000819050919050565b610cd781610cc4565b8114610ce257600080fd5b50565b600081359050610cf481610cce565b92915050565b60008060408385031215610d1157610d10610c61565b5b6000610d1f85828601610caf565b9250506020610d3085828601610ce5565b9150509250929050565b60008115159050919050565b610d4f81610d3a565b82525050565b6000602082019050610d6a6000830184610d46565b92915050565b610d7981610cc4565b82525050565b6000602082019050610d946000830184610d70565b92915050565b600080600060608486031215610db357610db2610c61565b5b6000610dc186828701610caf565b9350506020610dd286828701610caf565b9250506040610de386828701610ce5565b9150509250925092565b600060ff82169050919050565b610e0381610ded565b82525050565b6000602082019050610e1e6000830184610dfa565b92915050565b600060208284031215610e3a57610e39610c61565b5b6000610e4884828501610caf565b91505092915050565b610e5a81610c86565b82525050565b6000602082019050610e756000830184610e51565b92915050565b60008060408385031215610e9257610e91610c61565b5b6000610ea085828601610caf565b9250506020610eb185828601610caf565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f0257607f821691505b602082108103610f1557610f14610ebb565b5b50919050565b7f4f6e6c79206f776e65722063616e206d696e7400000000000000000000000000600082015250565b6000610f51601383610bba565b9150610f5c82610f1b565b602082019050919050565b60006020820190508181036000830152610f8081610f44565b9050919050565b6000606082019050610f9c6000830186610e51565b610fa96020830185610d70565b610fb66040830184610d70565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ff882610cc4565b915061100383610cc4565b925082820190508082111561101b5761101a610fbe565b5b9291505056fea264697066735822122089a84bd5dbe31b5ac2436e4781a4e695e7bfa552a4b4ba5bd560b9f06768ccca64736f6c63430008180033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MyToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyToken__factory {
    return super.connect(runner) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new Interface(_abi) as MyTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyToken {
    return new Contract(address, _abi, runner) as unknown as MyToken;
  }
}