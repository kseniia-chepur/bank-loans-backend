const httpErrorMsg = {
  'INTERNAL_SERVICE_ERROR': 'Internal server error',
  'INVALID_DATA': 'Invalid data',
  'INVALID_LOGIN_CREDENTIALS': 'Invalid login credentials',
  'CANNOT_DELETE_LOAN': 'Cannot delete loan with existing debt obligations',
  'CANNOT_DELETE_LOANTYPE': 'Cannot delete loan type with existing loans',
  'CANNOT_DELETE_CLIENT': 'Cannot delete client with existing loans',
  'CLIENT_EXISTS': 'Client already exists',
  'CLIENT_NOT_FOUND': 'Client not found',
  'DATA_NOT_FOUND': 'Data not found',
  'FORBIDDEN': 'Forbidden: No permission to access this resource',
  'UNAUTHORIZED': 'Unauthorized: Access is denied',
  'USER_EXISTS': 'User already exists',
};

module.exports = httpErrorMsg;
