const { successMsg } = require("../constants");
const { clientService } = require("../services");

exports.createClient = async (req, res, next) => {
  try {
    const newClient = await clientService.createClient(req.body);
    
    res.status(201).json({
      status: successMsg,
      client: newClient,
    });
  } catch(err) {
    next(err);
  }
};

exports.getClients = async (req, res, next) => {
  try {
    const clients = await clientService.getAllClients();

    res.status(200).json({
      status: successMsg,
      clients,
    });
  } catch(err) {
    next(err);
  }
};

exports.getOneClient = async (req, res, next) => {
  const { id } = req.params;

  try {
    const client = await clientService.getOneClient(id);

    res.status(200).json({
      status: successMsg,
      client,
    });
  } catch(err) {
    next(err);
  }
};

exports.updateClient = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedClient = await clientService.updateClient(id, req.body);

    res.status(200).json({
      status: successMsg,
      client: updatedClient,
    });
  } catch(err) {
    next(err);
  }
};

exports.deleteClient = async (req, res, next) => {
  const { id } = req.params;

  try {
   await clientService.deleteUser(id);

    res.sendStatus(204);
  } catch(err) {
    next(err);
  }
};