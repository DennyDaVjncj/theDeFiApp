const trustSet_tx = {
    "TransactionType": "TrustSet",
    "Account": standbyDestinationField.value,
    "LimitAmount": {
      "currency": standbyCurrencyField.value,
      "issuer": standby_wallet.address,
      "value": standbyAmountField.value
    }
  }

const ts_prepared = await client.autofill(trustSet_tx)
const ts_signed = operational_wallet.sign(ts_prepared)
const ts_result = await client.submitAndWait(ts_signed.tx_blob)