let isInternetEnabled=true;
let isGpsEnabled=true;

// Logical AND
console.log("can i navigate using googlemaps "+ (isInternetEnabled && isGpsEnabled));

// Logical OR
let eWallet=200;
let isLinkedCredit=true;

console.log("can i book cab "+(eWallet >0) || isLinkedCredit);

// Logical NOT
console.log("Is Internet not enabled: "+ isInternetEnabled);