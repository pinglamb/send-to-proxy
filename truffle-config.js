module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    test: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gasPrice: 0x01,
    },
  },

  mocha: {
    recursive: true,
    timeout: 12000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.6.12',
    },
  },
};
