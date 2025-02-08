const trustSet_tx = {
    "TransactionType": "TrustSet",
    "Account": standbyDestinationField.value,
    "LimitAmount": {
      "currency": standbyCurrencyField.value,
      "issuer": standby_wallet.address,
      "value": standbyAmountField.value
    }
  }

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