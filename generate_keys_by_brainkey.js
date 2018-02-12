const {PrivateKey, key, hash} = require("karmajs");

const brainKey = key.normalize_brainKey(process.argv[2]);

console.log("Normalized Brain Key:", brainKey);

let ownerPKey = PrivateKey.fromBuffer(hash.sha256(hash.sha512(brainKey + " " + 0)));
let activeKey = PrivateKey.fromBuffer(hash.sha256(hash.sha512(ownerPKey.toWif() + " " + 0)));
let memoKey = PrivateKey.fromBuffer(hash.sha256(hash.sha512(activeKey.toWif() + " " + 0)));

console.log("Owner Private key:", ownerPKey.toWif());
console.log("Owner Public key :", ownerPKey.toPublicKey().toString());
console.log("Active Private key:", activeKey.toWif());
console.log("Active Public key :", activeKey.toPublicKey().toString());
console.log("Memo Private key:", memoKey.toWif());
console.log("Memo Public key :", memoKey.toPublicKey().toString());

