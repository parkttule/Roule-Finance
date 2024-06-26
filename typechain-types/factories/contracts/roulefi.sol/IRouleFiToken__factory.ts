/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRouleFiToken,
  IRouleFiTokenInterface,
} from "../../../contracts/roulefi.sol/IRouleFiToken";

const _abi = [
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

export class IRouleFiToken__factory {
  static readonly abi = _abi;
  static createInterface(): IRouleFiTokenInterface {
    return new Interface(_abi) as IRouleFiTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IRouleFiToken {
    return new Contract(address, _abi, runner) as unknown as IRouleFiToken;
  }
}
