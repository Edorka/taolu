/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cathegory = require('./cathegory.model');

exports.register = function(socket) {
  Cathegory.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Cathegory.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('cathegory:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('cathegory:remove', doc);
}