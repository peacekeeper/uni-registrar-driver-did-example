'use strict';


/**
 * Deactivates a DID.
 *
 * body DeactivateRequest  (optional)
 * returns DeactivateState
 **/
exports.deactivate = function(body) {
  return new Promise(function(resolve, reject) {
    resolve(501);
  });
}


/**
 * Registers a DID.
 *
 * body RegisterRequest  (optional)
 * returns RegisterState
 **/
exports.register = function(body) {
  return new Promise(function(resolve, reject) {
    var response = {
      "jobId" : null,
      "didState" : {
        "identifier" : "did:example:0000000000123456",
        "state" : "finished",
        "secret" : {
          "keys" : [ {
            "privateKeyJwk" : {
              "kty" : "OKP",
              "d" : "NzJXR3A3TmdGUjFPcWRpOHpsdDdqUVE0MzRYUjBjTlE",
              "crv" : "Ed25519",
              "x" : "jpIKKU2b77lNXKTNW2NGvw1GUMjU6v_l_tLJAH5uYz0"
            },
            "publicKeyDIDURL" : "did:example:0000000000123456#key-1"
          } ]
        }
      }
    };
    resolve(response);
  });
}


/**
 * Updates a DID.
 *
 * body UpdateRequest  (optional)
 * returns UpdateState
 **/
exports.update = function(body) {
  return new Promise(function(resolve, reject) {
    resolve(501);
  });
}

