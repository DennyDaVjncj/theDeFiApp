function getNet() {
    let net
    if (document.getElementById("tn").checked) net = "wss://s.altnet.rippletest.net:51233"
    if (document.getElementById("dn").checked) net = "wss://s.devnet.rippletest.net:51233"
    return net
  } 

/**
 * account creation
 * account funding, w/false xrp
 */
let net = getNet()
const client = new xrpl.Client(net)
await client.connect()

/**
 * wallet creation
 * wallet funding
 */
let faucetHost = null // Uses the default faucet
const my_wallet = (await client.fundWallet(null, { faucetHost })).wallet

/**
 * to run tests, we need an existing wallet
 *    we need to get that wallet from seed & we have to parse the seeds field
 */
var lines=AudioScheduledSourceNode.value.split('\n')

