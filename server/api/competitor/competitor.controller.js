'use strict';

var _ = require('lodash');
var Competitor = require('./competitor.model');

// Get list of competitors
exports.index = function(req, res) {
  Competitor.find(function (err, competitors) {
    if(err) { return handleError(res, err); }
    return res.json(200, competitors);
  });
};

// Get a single competitor
exports.show = function(req, res) {
  Competitor.findById(req.params.id, function (err, competitor) {
    if(err) { return handleError(res, err); }
    if(!competitor) { return res.send(404); }
    return res.json(competitor);
  });
};

// Creates a new competitor in the DB.
exports.create = function(req, res) {
  Competitor.create(req.body, function(err, competitor) {
    if(err) { return handleError(res, err); }
    return res.json(201, competitor);
  });
};

// Updates an existing competitor in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Competitor.findById(req.params.id, function (err, competitor) {
    if (err) { return handleError(res, err); }
    if(!competitor) { return res.send(404); }
    var updated = _.merge(competitor, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, competitor);
    });
  });
};

// Deletes a competitor from the DB.
exports.destroy = function(req, res) {
  Competitor.findById(req.params.id, function (err, competitor) {
    if(err) { return handleError(res, err); }
    if(!competitor) { return res.send(404); }
    competitor.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}