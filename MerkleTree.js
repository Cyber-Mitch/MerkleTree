const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddresses = ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
                          "0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7",
                          "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
                          "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
                          "0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C",
                          "0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB",
                        ]

    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

    const rootHash = merkleTree.getRoot();
    console.log('Whitelist Merkle Tree\n', merkleTree.toString());
    console.log("Root Hash: ", rootHash);

    const claimingAddress = leafNodes[6];
    const hexProof = merkleTree.getHexProof(claimingAddress);
    console.log(hexProof);

    