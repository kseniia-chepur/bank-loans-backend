const { model, Schema } = require('mongoose');

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ownershipType: {
    type: String, 
    required: true,
  },
  address: {
    type: String,
    required: true,
  }, 
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  contactPerson: {
    type: String,
    required: true,
  }
});

const Client = model('Client', clientSchema);

module.exports = Client;
