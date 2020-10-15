'use strict';
const { keyToPublicIdentityKey, FactomIdentityManager } = require('factom-identity-lib').app;
const base58 = require('bs58');
const crypto = require('crypto');
const { validatePublicKey } = require('../utils/keyUtils');
const { IdentityAlreadyExistsError } = require('./errors');

const identityClient = new FactomIdentityManager({
    factomd: {
        host: process.env.FACTOMD_HOST,
        port: process.env.FACTOMD_PORT,
    },
    walletd: {
        host: process.env.FACTOM_WALLETD_HOST,
        port: process.env.FACTOM_WALLETD_PORT,
    },
});

/**
 * Deactivates a DID.
 *
 * body DeactivateRequest  (optional)
 * returns DeactivateState
 **/
exports.deactivate = function (body) {
    return new Promise(function (resolve, reject) {
        resolve(501);
    });
}


/**
 * Registers a DID.
 *
 * body RegisterRequest  (optional)
 * returns RegisterState
 **/
exports.register = function (body) {
    return new Promise(function (resolve, reject) {
        const { extIds, publicKeyBase58 } = body.options;

        try {
            validatePublicKey(publicKeyBase58);
        }
        catch (err) {
            reject(err);
        }

        let names = extIds;
        if (!extIds || !extIds.length) {
            names = [
                crypto.createHash('sha256').update(base58.decode(publicKeyBase58)).digest('hex')
            ];
        }

        identityClient.createIdentity(names,
            [keyToPublicIdentityKey(base58.decode(publicKeyBase58))],
            process.env.ES_ADDRESS)
        .then(result => resolve({
            "jobId": result.txId,
            "didState": {
                "identifier": `did:factom:${result.chainId}`,
                "state": "finished"
            }
        }))
        .catch(err => {
            if (err.message.includes("already exists.")) {
                reject(new IdentityAlreadyExistsError(
                    'A Factom DID with those parameters already exists.'));
            }
            reject(err);
        });
    });
}


/**
 * Updates a DID.
 *
 * body UpdateRequest  (optional)
 * returns UpdateState
 **/
exports.update = function (body) {
    return new Promise(function (resolve, reject) {
        resolve(501);
    });
}

