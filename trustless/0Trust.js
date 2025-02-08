const trustSet_tx = {
    "TransactionType": "TrustSet",
    "Account": standbyDestinationField.value,
    "LimitAmount": {
      "currency": standbyCurrencyField.value,
      "issuer": standby_wallet.address,
      "value": standbyAmountField.value
    }
  }

  const prepared=await client.autofill({
    "TransactionType":"payment",
    "Account":standby_wallet.address,
    "Amount":xrpl.xrpToDrops(sendAmounts),
    "Destination":
      standbyDestinationField.value
  });
  const send_token_tx = {
    "TransactionType": "Payment",
    "Account": standby_wallet.address,
    "Amount": {
      "currency": standbyCurrencyField.value,
      "value": standbyAmountField.value,
      "issuer": standby_wallet.address
    },
    "Destination": standbyDestinationField.value
  };
  /**
 * logic for sending tokens, via an established trustline
 */
const send_token_tx = {
  "TransactionType": "Payment",
  "Account": standby_wallet.address,//source of payment?
  "Amount": {
    "currency": standbyCurrencyField.value,
    "value": standbyAmountField.value,
    "issuer": standby_wallet.address
  },
  "Destination": standbyDestinationField.value
}
/**
 * once all the prerequisites for a transaction are completed & captured by the UI, we can then send, with the logic below
 */
const pay_prepared = await client.autofill(send_token_tx)
const pay_signed = standby_wallet.sign(pay_prepared)
 results += 'Sending ${issue_quantity} ${currency_code} to ' +
   standbyDestinationField.value + '...'
 standbyResultField.value = results
const pay_result = await client.submitAndWait(pay_signed.tx_blob)