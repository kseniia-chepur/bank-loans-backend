const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { serve, setup } = require('swagger-ui-express');

const { loanRouter, clientRouter, loanTypesRouter, authRouter } = require('./routes');
const { errorController } = require('./controllers');
const swaggerDocs = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api-docs', serve, setup(swaggerDocs));

app.use('/auth', authRouter);
app.use('/clients', clientRouter);
app.use('/loantypes', loanTypesRouter);
app.use('/loans', loanRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    message: 'Oops! Resource not found.',
  });
});

app.use(errorController.globalErrorHandler);

module.exports = app;
