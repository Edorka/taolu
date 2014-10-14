'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InscriptionSchema = new Schema({
  formalized: Date,
  competitors: [{ type : ObjectId, ref: 'Competitor' }],
  active: Boolean
});

module.exports = mongoose.model('Inscription', InscriptionSchema);
