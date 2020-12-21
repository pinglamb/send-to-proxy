// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

contract Sender {
  function deposit() external payable { }

  function send(address payable to, uint256 amount) external {
    to.transfer(amount);
  }
}
