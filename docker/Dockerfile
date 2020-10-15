# Dockerfile for exampleorg/uni-registrar-driver-did-factom

FROM node:10
MAINTAINER Scott Malley <smalley@sphereon.com>

# build uni-registrar-driver-did-factom

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# variables

ENV uniregistrar_driver_did_factom_exampleSetting=exampleSetting

# done

EXPOSE 9080

CMD [ "node", "index.js" ]
