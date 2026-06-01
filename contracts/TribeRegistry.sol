// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title TribeRegistry
/// @notice Registers Tribes as sovereign archetypes with an immutable Seal
contract TribeRegistry {

    struct Tribe {
        string symbol;      // e.g., @x@, @F@
        string seal;        // Immutable textual oath
        address founder;    // The wallet that created this Tribe
        bool exists;
    }

    mapping(string => Tribe) public tribes;
    string[] public tribeList;

    event TribeCreated(string indexed symbol, string seal, address indexed founder, uint256 timestamp);

    /// @notice Register a new Tribe
    /// @param _symbol Unique Tribe symbol (e.g., "@x@")
    /// @param _seal   Immutable Seal text
    function createTribe(string memory _symbol, string memory _seal) external {
        require(!tribes[_symbol].exists, "Tribe already exists");
        require(bytes(_symbol).length > 0, "Symbol cannot be empty");
        require(bytes(_seal).length > 0, "Seal cannot be empty");

        tribes[_symbol] = Tribe({
            symbol: _symbol,
            seal: _seal,
            founder: msg.sender,
            exists: true
        });

        tribeList.push(_symbol);
        emit TribeCreated(_symbol, _seal, msg.sender, block.timestamp);
    }

    /// @notice Get details of a Tribe by symbol
    function getTribe(string memory _symbol) external view returns (Tribe memory) {
        require(tribes[_symbol].exists, "Tribe not found");
        return tribes[_symbol];
    }

    /// @notice Get total number of registered Tribes
    function getTribeCount() external view returns (uint256) {
        return tribeList.length;
    }
}
