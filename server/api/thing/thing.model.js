'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//TODO: change schema to reflect proposals
var ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
