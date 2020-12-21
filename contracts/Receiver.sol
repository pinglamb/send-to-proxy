// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

contract Receiver {
  receive() external payable {
    // THIS IS NEVER CALLED BECAUSE OF PROXY
    // DO NOTHING
  }
}
