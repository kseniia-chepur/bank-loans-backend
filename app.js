const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { serve, setup } = require('swagger-ui-express');

const { loanRouter, clientRouter, loanTypesRouter, authRouter } = require('./routes');
const { errorController } = require('./controllers');
const swaggerDocs = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(cors());

const pathPrefix = 'api/v1';

app.use(`/${pathPrefix}/api-docs`, serve, setup(swaggerDocs));

app.use(`/${pathPrefix}/auth`, authRouter);
app.use(`/${pathPrefix}/clients`, clientRouter);
app.use(`/${pathPrefix}/loantypes`, loanTypesRouter);
app.use(`/${pathPrefix}/loans`, loanRouter);


app.all('*', (req, res) => {
    res.status(404).json({
        message: 'Oops! Resource not found.',
    });
});

app.use(errorController.globalErrorHandler);

module.exports = app;