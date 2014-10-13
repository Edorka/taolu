'use strict';

var _ = require('lodash');
var Cathegory = require('./cathegory.model');

// Get list of cathegorys
exports.index = function(req, res) {
  Cathegory.find(function (err, cathegorys) {
    if(err) { return handleError(res, err); }
    return res.json(200, cathegorys);
  });
};

// Get a single cathegory
exports.show = function(req, res) {
  Cathegory.findById(req.params.id, function (err, cathegory) {
    if(err) { return handleError(res, err); }
    if(!cathegory) { return res.send(404); }
    return res.json(cathegory);
  });
};

// Creates a new cathegory in the DB.
exports.create = function(req, res) {
  Cathegory.create(req.body, function(err, cathegory) {
    if(err) { return handleError(res, err); }
    return res.json(201, cathegory);
  });
};

// Updates an existing cathegory in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cathegory.findById(req.params.id, function (err, cathegory) {
    if (err) { return handleError(res, err); }
    if(!cathegory) { return res.send(404); }
    var updated = _.merge(cathegory, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cathegory);
    });
  });
};

// Deletes a cathegory from the DB.
exports.destroy = function(req, res) {
  Cathegory.findById(req.params.id, function (err, cathegory) {
    if(err) { return handleError(res, err); }
    if(!cathegory) { return res.send(404); }
    cathegory.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}