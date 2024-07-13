const { clientValidation, HttpError } = require("../utils");
const { clientService } = require('../services');

exports.handleCreateClientData = async (req, res, next) => {
  try {
    const { value, error } = clientValidation.createClientDataValidator(req.body);

    if (error) {
      throw new HttpError(400, 'Invalid client data');
    }

   await clientService.checkClientExistsByPhone({ phone: value.phone });

    req.body = value;
    next();
  } catch(err) {
    next(err);
  }
};

exports.validateClientId = async (req, res, next) => {
  try {
    const { id } = req.params;

    await clientService.checkClientExistsById(id);

    next();
  } catch(err) {
    next(err);
  }
};

exports.handleUpdateClientData = async (req, res, next) => {
  try {
    const { value, error } = clientValidation.updateClientDataValidator(req.body);

    if (error) {
      throw new HttpError(400, 'Invalid client data');
    }

    const { phone } = value?.phone;
    const {id } = req.params;

    if (phone) {
      await clientService.checkClientExistsByPhone({ phone, _id: { $ne: id }});
    }

    req.body = value;
    next();
  } catch(err) {
    next(err);
  }
};