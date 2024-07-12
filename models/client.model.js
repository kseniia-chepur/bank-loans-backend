const { model, Schema } = require('mongoose');
const { ownershipTypes } = require('../constants');

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    ownershipType: {
      type: String,
      enum: Object.values(ownershipTypes), 
      required: true,
    },
    address: {
      type: String,
      required: true,
    }, 
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    contactPerson: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Client = model('Client', clientSchema);

module.exports = Client;
