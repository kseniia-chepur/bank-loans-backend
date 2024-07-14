const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const { loanRouter, clientRouter, loanTypesRouter, authRouter } = require('./routes');
const { errorController } = require('./controllers');

process.env.MODE === 'production' 
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB database!'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas:', err);
    process.exit(1);
  }
);

app.use(express.json());
app.use(cors());

const pathPrefix = 'api/v1';

app.use(`/${pathPrefix}/clients`, clientRouter);
app.use(`/${pathPrefix}/loantypes`, loanTypesRouter);
app.use(`/${pathPrefix}/loans`, loanRouter);
app.use(`/${pathPrefix}/auth`, authRouter);

app.all('*', (req, res) => {
    res.status(404).json({
        message: 'Oops! Resource not found.',
    });
});

app.use(errorController.globalErrorHandler);

PORT = PORT ?? 3005;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});