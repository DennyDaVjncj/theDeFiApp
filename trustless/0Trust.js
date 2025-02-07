const trustSet_tx = {
    "TransactionType": "TrustSet",
    "Account": standbyDestinationField.value,//this config exists because, this wallet can hold a single asset
    "LimitAmount": {
      "currency": standbyCurrencyField.value,
      "issuer": standby_wallet.address,
      "value": standbyAmountField.value
    }
  }