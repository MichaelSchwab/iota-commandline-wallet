# IOTA commandline wallet
A commandline based wallet for the IOTA crypto currency, based on nodejs

If you are familiar with DOS commandline, or Linux is your preferred OS this is for you.
I have made everything as simple as possible, there are Videos for installation and operation,
but still users not familiar with command line operations might have their problems.

If somebody wants to build a GUI on top, you are welcome to do so.

In order to run the wallet on an regular basis, consider to run your own IOTA full node,
how to do this is shown in the section "Setting up a IOTA full node" below.

Installation:

Youtube video guideing you through the installation: https://www.youtube.com/watch?v=ke1NERpgbd4

Install nodejs Version >= 8.0.0
create a directory and put the my-wallet.js and iota-wallet-config.js in there

Install additional modules

`npm install iota.lib.js`

`npm install nedb`

Setup:

Now you need to edit the configuration file to enter your seed
and the URL of the IOTA full node you want to use.
For suggestions which node to use see: http://iotasupport.com/lightwallet.shtml

See the contents of the file: iota-wallet-config.js
Please take the time to read all comments in the file to fully understand what you are doing!

Now you are ready to run, enter:

`node my-wallet.js`

`node my-wallet.js help`

`node my-wallet.js SyncAll`

`node my-wallet.js ShowBalance`

Youtube video on how to operate the wallet:
https://www.youtube.com/watch?v=cwTxv-LnvYw

Old Introductional Video
https://www.youtube.com/watch?v=nWo1vwNsXfo

Address states used are:
1. new = unused not attached to tangle
2. attached = has one or more transactions with value 0
3. used = has transactions but no outgoing transactions and balance > 0
4. exhausted = has one confirmed outgoing transaction, no more transactions should issued with this address
5. overused = has more than one outgoing transaction, this should not happen, but can be forced by the user

Setting up a IOTA full node, just a brief overview
1. Get access (or setup yourself) to a 64Bit Windows or Linux or Mac server which has a public IP or can be reached from the internet using something like DynDns
2. Be sure the server runs 24/7 and is intended to alwas be connected to the internet.
3. Install Oracle Java RuntimeEnvironment (JRE) 64Bit. You might download it from here http://www.oracle.com/technetwork/java/javase/downloads/server-jre8-downloads-2133154.html
4. Get the precompiled IOTA Reference Implementation (IRI) from here https://github.com/iotaledger/iri/releases. Download the precompiled jar. For example the iri-1.3.2.jar
5. Copy the iri to a directory where it can be executed in.
6. Write a startup script. Just one line is enough. Example: java -Xmx1G -jar iri-1.3.2.jar -c iri.ini --remote --remote-limit-api "removeNeighbors, addNeighbors, interruptAttachingToTangle, attachToTangle"
7. Get neighbours, therefore goto https://slack.iota.org/ and join the community and enter the channel nodesharing. On this cannel are more people like you searching for neighbours, just get in touch and find 4-9 Neighbours.
8. Edit iri.ini suit your needs.

A more detailed description can be found
on https://forum.iota.org/t/setting-up-a-headless-node-on-a-ubuntu-iri-version-1-2-1/1332
and
on https://github.com/iotaledger/iri

