const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Receiver = artifacts.require('Receiver');
const Sender = artifacts.require('Sender');

contract('Receiver (proxy)', function([x, owner]) {
  it('works', async () => {
    // const receiver = await Receiver.new();
    const receiver = await deployProxy(Receiver);
    const sender = await Sender.new();

    await sender.deposit({from: owner, value: (10**18).toString()});
    await sender.send(receiver.address, (10**17).toString());
  })
})
