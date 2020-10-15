const base58 = require('bs58');
const { InvalidPublicKeyError } = require('../service/errors');

const validatePublicKey = publicKey => {
    if(!publicKey){
        throw new InvalidPublicKeyError("Public key not supplied.")
    }
    let pk;
    try {
        pk = base58.decode(publicKey);
    } catch (err) {
        throw new InvalidPublicKeyError("Public key must be provided in base 58.")
    }
    if(pk.length !== 32){
        throw new InvalidPublicKeyError("Incorrect public key length (must be 32 bytes)");
    }
}

module.exports = {
    validatePublicKey,
};
