module.exports = {

    // Node to connect to, suggest to setup your own node to have full control
    // More info see https://www.youtube.com/watch?v=KAAjxms7p1Q or in README.md
    // For suggestions on public servers see http://iotasupport.com/lightwallet.shtml
    // When you get an error when executing the Transfer command, the selected server might not allow you to
    // do so because it has to do the Proof of Work (PoW) for you, which puts a very high load
    // on the server.

    'provider': 'http://localhost:14265',

    // The basic concept of this config file is that the wallet itself can be startet under different names
    // in Linux you can do this by creating a softlink, in windows you just copy the original my-wallet.js
    // to the name you want to use. For example: copy my-wallet.js alices-wallet.js
    // when the wallet is started it looks for its own name and reads the corresponding config section.
    // So you can handle multiple wallets easily.
    // When adding a new section below dont forget to add a comma at the end of the previous section.

    // SECURITY: Do not store the wallet-config on your pc, since the Seeds (MASTER passwords to access all your iota)
    // are stored in the config. You can safely put the whole wallet on an USB stick! Dont forget to copy the sub-directory
    // named node_modules with all its contents, since these are the external modules required by the wallet.
    // You also might simply execute the whole installation on an USB stick.

    // Section name, this config section is used when you use my-wallet.js as the name of your wallet programm
    "my-wallet": {
                seed: "MY9SEED9HERE",
                databaseFile: "database-my-wallet.db",
                // Security Level of the Addresses used
                // Only change this if you know what you are doing. Available choices are 1, 2 and 3.
                // Delete the database file, and do a SyncAll after changing this value
                // If you dont see your balance anymore, thats ok, just switch back to see it again.
                addressSecurityLevel: 2,

                debugLevel: 3
            },

    // Section name, this config section is used when you use alices-wallet.js as the name of your wallet programm
    "alices-wallet": {
                seed: "ALICES9SEED9HERE",
                databaseFile: "database-alices-wallet.db",

                // Security Level of the Addresses used
                // Only change this if you know what you are doing. Available choices are 1, 2 and 3.
                // Delete the database file, and do a SyncAll after changing this value
                // If you dont see your balance anymore, thats ok, just switch back to see it again.
                addressSecurityLevel: 2,
                debugLevel: 3 // Values 0 to 9 0=silent 9=super verbose
            },

    // Section name, this config section is used when you use bobs-wallet.js as the name of your wallet programm
    "bobs-wallet": {
                seed: "BOBS9SEED9HERE",
                databaseFile: "database-bobs-wallet.db",
                // Security Level of the Addresses used
                // Only change this if you know what you are doing. Available choices are 1, 2 and 3.
                // Delete the database file, and do a SyncAll after changing this value
                // If you dont see your balance anymore, thats ok, just switch back to see it again.
                addressSecurityLevel: 2,
                debugLevel: 3 // Values 0 to 9 0=silent 9=super verbose
            }
};

