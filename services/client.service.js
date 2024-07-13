const { Types } = require("mongoose");

const { Client } = require("../models");
const { HttpError } = require("../utils");

exports.createClient = (clientData) => Client.create(clientData);

exports.getAllClients = () => Client.find();

exports.getOneClient = (id) => Client.findById(id);

exports.updateClient = async (id, updatedClientData) => {
  const client = await Client.findById(id);

  Object.keys(updatedClientData).forEach(key => {
    client[key] = updatedClientData[key];
  });

  return client.save();
};

exports.deleteUser = (id) => Client.findByIdAndDelete(id);

exports.checkClientExistsByPhone = async (phone) => {
  const clientExists = await Client.exists(phone);

  if (clientExists) {
    throw new HttpError(409, 'Client exists');
  }
};

exports.checkClientExistsById = async (id) => {
  const isIdValid = Types.ObjectId.isValid(id);

  if (!isIdValid) {
    throw new HttpError(404, 'Client not found');
  }

  const clientExists = await Client.exists({ _id: id });

  if (!clientExists) {
    throw new HttpError(404, 'Client not found');
  }
};