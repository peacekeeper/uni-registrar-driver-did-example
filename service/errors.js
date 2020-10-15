
class InvalidRequestError extends Error {
    constructor(message) {
        super(message);
    }
}

class InvalidPublicKeyError extends InvalidRequestError {
    constructor(message) {
        super(message);
    }
}

class IdentityAlreadyExistsError extends InvalidRequestError {
    constructor(message) {
        super(message);
    }
}

module.exports = {
    InvalidPublicKeyError,
    IdentityAlreadyExistsError,
    InvalidRequestError
};
