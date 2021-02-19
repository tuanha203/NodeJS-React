import express from 'express';
import data from '../data.js';
import userModel from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const removeUsers = await userModel.remove({});
    const usersInsert = await userModel.insertMany(data.users);
    res.send( usersInsert );
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const allUsers = await userModel.find({});
    res.send( allUsers );
  })
);

export default router;
