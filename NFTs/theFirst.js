//this logic mints an NFT on the XRPL
const transactionJson = {
    "TransactionType": "NFTokenMint",
    "Account": standby_wallet.classicAddress,
    "URI": xrpl.convertStringToHex(standbyTokenUrlField.value),//points to meta data
    "Flags": parseInt(standbyFlagsField.value),//can be set to 8, to make nft transferable
    "TransferFee": parseInt(standbyTransferFeeField.value),//percentage of royaltee fee
    "NFTokenTaxon": 0 // Required, but if you have no use for it, set it to zero.
  };
  const tx = await client.submitAndWait(transactionJson, { wallet: standby_wallet} )
  
  //invoking list of nfts owned by this account
  const nfts = await client.request({
    method: "account_nfts",
    account: standby_wallet.classicAddress,
    // ledger_index: "validated"
  });

  //burning an nft!
  const transactionBlob={
    "TransactionType": "NFTokenBurn",
    "Account": standby_wallet.classicAddress,
    "NFTokenID": standbyTokenIdField.value
}
const tx=await client.submitiAndWait(transactionBlob,{wallet:standby_wallet});  

  /**
   * the above logic is primitive to the ledger
*/