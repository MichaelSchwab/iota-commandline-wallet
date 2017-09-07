module.exports = {

    // Node to connect to, suggest to setup your own node to have full control
    // More info see https://www.youtube.com/watch?v=KAAjxms7p1Q
    provider: "http://node.iotawallet.info:14265",

    // The basic concept of this config file is that the wallet itself can be startet under different names
    // in Linux you can do this by creating a softlink, in windows you just copy the original my-wallet.js
    // to the name you want to use. For example: copy my-wallet.js alices-wallet.js
    // when the wallet is started it looks for its own name and reads the corresponding config section.
    // So you can handle multiple wallets easily.
    // When adding a new section below dont forget to add a comma at the end of the previous section.

    // SECURITY: Dont store the wallet-config on your pc since the seeds (MASTER passwords to access all your iota)
    // are stored in the config. You can safely put the whole wallet on an USB stick!
    // If you also copy the node_modules directory which is created when you install the required modules,
    // you will be able to run your wallet directly from the USB stick.

    // Section name, this config section is used when you use my-wallet.js as the name of your wallet programm
    "my-wallet": {
                seed: "MY9SEED9HERE",
                databaseFile: "my-wallet.db",
                debugLevel: 3
            },

    // Section name, this config section is used when you use alices-wallet.js as the name of your wallet programm
    "alices-wallet": {
                seed: "ALICES9SEED9HERE",
                databaseFile: "alices-wallet.db",
                debugLevel: 3
            }
};
