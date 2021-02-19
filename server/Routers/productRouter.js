import express from 'express';
import asyncHandler from 'express-async-handler';
import data from '../data.js';
import productModel from '../models/productModel.js';
const productRouter = express.Router();

productRouter.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const productsRemove = await productModel.remove({});
    const productsInsert = await productModel.insertMany(data.product);
    res.send(productsInsert);
  })
);

productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const allProduct = await productModel.find({});
    res.send(allProduct);
  })
);

productRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      res.status(404).send('We dont see anything');
    }
    res.send(product);
  })
);

export default productRouter;
