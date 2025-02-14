const transactionJson = {
    "TransactionType": "NFTokenMint",
    "Account": standby_wallet.classicAddress,
    "URI": xrpl.convertStringToHex(standbyTokenUrlField.value),//points to meta data
    "Flags": parseInt(standbyFlagsField.value),//can be set to 8, to make nft transferable
    "TransferFee": parseInt(standbyTransferFeeField.value),//percentage of royaltee fee
    "NFTokenTaxon": 0 // Required, but if you have no use for it, set it to zero.
  }
  const tx = await client.submitAndWait(transactionJson, { wallet: standby_wallet} )