const mongoose = require('mongoose');

const app = require('./app');

const { NODE_ENV, PROD_PORT, DEV_PORT, MONGO_URL } = process.env;

NODE_ENV === 'production' 
  ? (PORT = PROD_PORT)
  : (PORT = DEV_PORT);

  PORT = PORT ?? 3005;

mongoose.connect(MONGO_URL)
  .then(() => app.listen(PORT))
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas:', err);
    process.exit(1);
  }
);

