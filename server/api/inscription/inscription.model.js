'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    competitorId = Schema.Types.ObjectId;

var InscriptionSchema = new Schema({
  formalized: Date,
  //competitors: [{ type : competitorId, ref: 'Competitor' }],
  active: Boolean
});

module.exports = mongoose.model('Inscription', InscriptionSchema);
