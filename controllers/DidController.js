'use strict';

const utils = require('../utils/writer.js');
const FactomService = require('../service/FactomService');
const {InvalidRequestError} = require('../service/errors');

module.exports.deactivate = function deactivate (req, res, next, body) {
  FactomService.deactivate(body)
    .then(response => {
      utils.writeJson(res, response, 200);
    })
    .catch(err => {
      utils.writeJson(res, {message: err.message}, 500);
    });
};

module.exports.register = function register (req, res, next, body) {
  FactomService.register(body)
    .then(response => {
      utils.writeJson(res, response, 200);
    })
    .catch(err =>{
      let code;
      if(err instanceof InvalidRequestError){
        code = 400;
      } else {
        code = 500;
      }
      utils.writeJson(res, {message: err.message}, code);
    });
};

module.exports.update = function update (req, res, next, body) {
  FactomService.update(body)
    .then(response => {
      utils.writeJson(res, response, 200);
    })
    .catch(err => {
      utils.writeJson(res, {message: err.message}, 500);
    });
};
