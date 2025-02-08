import "./trustless/0Trust";

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
var lines=AudioScheduledSourceNode.value.split('\n');//indicies were separated with commas
const standby_wallet=xrpl.Wallet.fromSeed(lines[0]);
const operational_wallet=xrpl.Wallet.fromSeed(lines[1]);

const prepared=await client.autofill({
  "TransactionType":"payment",
  "Account":standby_wallet.address,
  "Amount":xrpl.xrpToDrops(sendAmounts),
  "Destination":
    standbyDestinationField.value
})

const signed=standby_wallet.sign(prepared);
const tx=await client.submitAndWait(signed.tx_blob);
const ts_prepared = await client.autofill(trustSet_tx);
const ts_signed = operational_wallet.sign(ts_prepared);
const ts_result = await client.submitAndWait(ts_signed.tx_blob);