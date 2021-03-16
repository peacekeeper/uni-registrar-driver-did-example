![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-registrar/master/docs/logo-dif.png)

# Universal Registrar Driver: example

This is an example [Universal Registrar](https://github.com/decentralized-identity/universal-registrar/) driver for fictional **did:example** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t exampleorg/uni-registrar-driver-did-example
docker run -p 9080:9080 exampleorg/uni-registrar-driver-did-example
curl -X POST http://localhost:9080/1.0/create -H "Content-Type: application/json"
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `uniregistrar_driver_did_example_exampleSetting`

 * An example setting for the driver.
 * Default value: (empty string)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `exampleMetadata`: Example metadata
