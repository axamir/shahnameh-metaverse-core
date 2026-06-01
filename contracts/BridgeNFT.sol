// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title BridgeNFT
/// @notice Soulbound token representing a bridge between two Tribes
contract BridgeNFT {
    string public name = "Shahnameh Bridge";
    string public symbol = "BRIDGE";

    uint256 private _tokenIdCounter;
    address public minter;
    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balances;
    mapping(uint256 => string) private _tokenURIs;

    event BridgeMinted(
        uint256 indexed tokenId,
        address indexed entity,
        string fromTribe,
        string toTribe,
        uint256 timestamp
    );

    modifier onlyMinter() {
        require(msg.sender == minter, "Not the minter");
        _;
    }

    constructor() {
        minter = msg.sender;
        _tokenIdCounter = 1;
    }

    /// @notice Mint a soulbound Bridge NFT
    function mintBridge(
        address _entity,
        string memory _fromTribe,
        string memory _toTribe,
        string memory _metadataURI
    ) external onlyMinter returns (uint256) {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        _owners[tokenId] = _entity;
        _balances[_entity]++;
        _tokenURIs[tokenId] = _metadataURI;
        emit BridgeMinted(tokenId, _entity, _fromTribe, _toTribe, block.timestamp);
        return tokenId;
    }

    /// @notice Owner of a token (soulbound — no transfers allowed)
    function ownerOf(uint256 tokenId) external view returns (address) {
        address owner_ = _owners[tokenId];
        require(owner_ != address(0), "Token does not exist");
        return owner_;
    }

    /// @notice Balance of an address
    function balanceOf(address owner_) external view returns (uint256) {
        return _balances[owner_];
    }

    /// @notice Token URI
    function tokenURI(uint256 tokenId) external view returns (string memory) {
        return _tokenURIs[tokenId];
    }

    /// @notice Transfers are blocked — this NFT is soulbound
    function transferFrom(address, address, uint256) external pure {
        revert("BridgeNFT is soulbound: transfers not allowed");
    }
}
