import express from 'express';
import mongoose from 'mongoose';

import routes from './routes/index';
import keys from '../config/keys';
require('./auth/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});