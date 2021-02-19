import express from 'express';
import data from './data.js';
const port = process.env.PORT || 5000;
import mongoose from 'mongoose';
import userRouter from './Routers/userRouter.js';
const productData = data.product;
import productRouter from './Routers/productRouter.js'

const app = express();

mongoose.connect(
  'mongodb://localhost:27017/Shop',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connect to DATABASE')
);

app.use('/api/users', userRouter);

app.use('/api/product', productRouter)

/* app.get('/api/products', (req, res) => {
  res.send(productData);
}); */

app.get('/', (req, res) => {
  res.send('sever already');
});

app.listen(port, () => console.log(`We run in port ${port}`));
