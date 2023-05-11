// SPDX-License-Identifier: MIT
pragma solidity ^0.7.1;

interface IFirst {
    function setNumber(uint _number) external;
    function setString(string calldata _string) external;
    function getNumber() external view returns (uint);
    function getString() external view returns (string memory);
    receive() external payable;
    function sendEther(address _to, uint _amount) external;
}

contract Second {
    IFirst myContract;

    constructor(address payable _myContractAddress) {
        myContract = IFirst(_myContractAddress);
    }

    function setNumber(uint _number) public {
        myContract.setNumber(_number);
    }

    function setString(string memory _string) public {
        myContract.setString(_string);
    }

    function getNumber() public view returns (uint) {
        return myContract.getNumber();
    }

    function getString() public view returns (string memory) {
        return myContract.getString();
    }

    receive() external payable {}

    function sendEther(address _to, uint _amount) public {
        myContract.sendEther(_to, _amount);
    }
}
       
