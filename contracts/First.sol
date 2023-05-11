// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract First {
    uint public myNumber;
    string public myString;

    function setNumber(uint _number) public {
        myNumber = _number;
    }

    function setString(string memory _string) public {
        myString = _string;
    }

    function getNumber() public view returns (uint) {
        return myNumber;
    }

    function getString() public view returns (string memory) {
        return myString;
    }

    receive() external payable {}

    function sendEther(address _to, uint _amount) public payable {
        payable(_to).transfer(_amount);
    }
}
