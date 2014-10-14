/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Inscription = require('./inscription.model');

exports.register = function(socket) {
  Inscription.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Inscription.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('inscription:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('inscription:remove', doc);
}