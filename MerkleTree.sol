// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleTree {
   

   
    bytes32 public merkleRoot = 0x2e35b61278fbcec3f3b0bb361d928e373e089a61758af09690ce0a5391078ff2;

    mapping(address => bool) public whitelistClaimed;


    function whitelistMint(bytes32[] calldata _merkleProof) public {
        require(!whitelistClaimed[msg.sender], "Address already claimed");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_merkleProof, merkleRoot, leaf),
            "Merkle Proof not valid."
        );
        whitelistClaimed[msg.sender] = true;
    }
}
