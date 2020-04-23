# Dockerfile for exampleorg/uni-registrar-driver-did-example

FROM node:10
MAINTAINER Markus Sabadello <markus@danubetech.com>

# build uni-registrar-driver-did-example

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# variables

ENV uniregistrar_driver_did_example_exampleSetting=exampleSetting

# done

EXPOSE 9080

CMD [ "node", "index.js" ]
