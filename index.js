const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const { loanRouter, clientRouter, loanTypesRouter } = require('./routes');

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

PORT = PORT ?? 3005;

app.use('/clients', clientRouter);
app.use('/loantypes', loanTypesRouter);
app.use('/loans', loanRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});