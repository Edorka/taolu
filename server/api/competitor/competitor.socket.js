/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Competitor = require('./competitor.model');

exports.register = function(socket) {
  Competitor.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Competitor.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('competitor:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('competitor:remove', doc);
}