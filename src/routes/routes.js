/* @flow */
import { Router } from 'express';
import multer from 'multer';

let router = Router();
const formdata = multer();

router.get('/hello', (req, res) => {
  res.send("hello from starkbaas world");
});

export default router;
