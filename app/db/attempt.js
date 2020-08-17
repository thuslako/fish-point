const mongoose = require('mongoose');
let schema     = mongoose.Schema;

var attemptSchema = new schema({
    catch: Boolean,
    date: Date,
    trip_start: Number,
    trip_end: Number,
    lon: Number,
    lat: Number,
});

module.exports = mongoose.model('Attempt',attemptSchema);