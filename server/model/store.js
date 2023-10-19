const mongoose = require('mongoose');
const { Schema } = mongoose;
const storeSchema = new Schema({
    name: String,
    address: String,
    phone_number: String,
    email: String,
    opening_hours: [
      {
        day: String,
        open_time: String,
        close_time: String,
        closed: Boolean,
      },
    ],
  });

  const Store = mongoose.model('Store', storeSchema);
  module.exports = Store

