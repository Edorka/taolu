'use strict';

var _ = require('lodash');
var Inscription = require('./inscription.model');

// Get list of inscriptions
exports.index = function(req, res) {
  Inscription.find(function (err, inscriptions) {
    if(err) { return handleError(res, err); }
    return res.json(200, inscriptions);
  });
};

// Get a single inscription
exports.show = function(req, res) {
  Inscription.findById(req.params.id, function (err, inscription) {
    if(err) { return handleError(res, err); }
    if(!inscription) { return res.send(404); }
    return res.json(inscription);
  });
};

// Creates a new inscription in the DB.
exports.create = function(req, res) {
  Inscription.create(req.body, function(err, inscription) {
    if(err) { return handleError(res, err); }
    return res.json(201, inscription);
  });
};

// Updates an existing inscription in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Inscription.findById(req.params.id, function (err, inscription) {
    if (err) { return handleError(res, err); }
    if(!inscription) { return res.send(404); }
    var updated = _.merge(inscription, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, inscription);
    });
  });
};

// Deletes a inscription from the DB.
exports.destroy = function(req, res) {
  Inscription.findById(req.params.id, function (err, inscription) {
    if(err) { return handleError(res, err); }
    if(!inscription) { return res.send(404); }
    inscription.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}