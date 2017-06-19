import next from 'next';
import path from 'path';
import express from 'express';
import PeopleRoutes from './routers/PeopleRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();

const PORT = 3001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/checkpoint2');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB Connected!!!');
});

nextApp.prepare().then(() => {
  const app = express();

  // Define all you backend handlers here...
  app.use(bodyParser.json());
  app.use(PeopleRoutes);

  // Handle everything that is not covered in above routes with next.js
  app.get('*', (request, response) => {
    return handle(request, response);
  });

  // eslint-disable-next-line
  app.use('*', (err, req, res, next) => {
    return res.status(500).json({
      message: err.message
    });
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port ' + PORT);
  });
});
