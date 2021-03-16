'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.create = function create (req, res, next, body) {
    Default.create(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deactivate = function deactivate (req, res, next, body) {
  Default.deactivate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update = function update (req, res, next, body) {
  Default.update(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
