const { Types } = require("mongoose");

const { Client, Loan } = require("../models");
const { HttpError } = require("../utils");
const { httpErrorMsg } = require("../constants");

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

exports.deleteUser = async (id) => {
  const existingLoans = await Loan.findOne({ client: id });

  if (existingLoans) {
    throw new HttpError(400, httpErrorMsg.CANNOT_DELETE_CLIENT);
  }

  await Client.findByIdAndDelete(id);
}

exports.checkClientExistsByPhone = async (phone) => {
  const clientExists = await Client.exists(phone);

  if (clientExists) {
    throw new HttpError(409, httpErrorMsg.CLIENT_EXISTS);
  }
};

exports.checkClientExistsById = async (id) => {
  const isIdValid = Types.ObjectId.isValid(id);

  if (!isIdValid) {
    throw new HttpError(404, httpErrorMsg.CLIENT_NOT_FOUND);
  }

  const clientExists = await Client.exists({ _id: id });

  if (!clientExists) {
    throw new HttpError(404, httpErrorMsg.CLIENT_NOT_FOUND);
  }
};