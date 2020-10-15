![DIF Logo](https://assets.website-files.com/5bca6108bae718b9ad49a5f9/5c4820477febe49184787777_Factom-Protocol_Logo-p-500.png)

# Universal Registrar Driver: factom

This is a [Universal Registrar](https://github.com/decentralized-identity/universal-registrar/) driver for **did:factom** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t sphereon/uni-registrar-driver-did-factom
docker run -p 9080:9080 sphereon/uni-registrar-driver-did-factom
curl -X POST http://localhost:9080/1.0/register -H "Content-Type: application/json"
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `uniregistrar_driver_did_factom_exampleSetting`

 * An example setting for the driver.
 * DidController value: (empty string)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `exampleMetadata`: Example metadata
