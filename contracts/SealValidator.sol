// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title SealValidator
/// @notice Stores loyalty scores assigned by authorized validators
contract SealValidator {
    address public owner;
    mapping(address => bool) public validators;
    mapping(address => mapping(string => uint256)) public loyaltyScores; // member => tribeSymbol => score

    event ValidatorAdded(address indexed validator);
    event ValidatorRemoved(address indexed validator);
    event ScoreUpdated(address indexed member, string indexed tribeSymbol, uint256 score, address indexed validator);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyValidator() {
        require(validators[msg.sender], "Not an authorized validator");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    /// @notice Add an authorized validator
    function addValidator(address _validator) external onlyOwner {
        validators[_validator] = true;
        emit ValidatorAdded(_validator);
    }

    /// @notice Remove an authorized validator
    function removeValidator(address _validator) external onlyOwner {
        validators[_validator] = false;
        emit ValidatorRemoved(_validator);
    }

    /// @notice Set the loyalty score of a member for a specific tribe
    function setScore(address _member, string memory _tribeSymbol, uint256 _score) external onlyValidator {
        require(_score <= 100, "Score must be 0-100");
        loyaltyScores[_member][_tribeSymbol] = _score;
        emit ScoreUpdated(_member, _tribeSymbol, _score, msg.sender);
    }

    /// @notice Get the loyalty score of a member for a tribe
    function getScore(address _member, string memory _tribeSymbol) external view returns (uint256) {
        return loyaltyScores[_member][_tribeSymbol];
    }
}
