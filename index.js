const express = require('express');
const dotenv = require('dotenv').config();

process.env.MODE === 'production' 
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

   const app = express();

   PORT = PORT ?? 3005;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});