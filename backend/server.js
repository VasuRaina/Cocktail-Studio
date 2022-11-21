import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cocktailRoutes from './routes/cocktailRoutes.js';
import postRoutes from './routes/postRoutes.js';
dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/cocktails', cocktailRoutes);
app.use('/post', postRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db, listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
