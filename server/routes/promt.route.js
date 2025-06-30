import express from 'express'
import { sendPromt } from '../controller/promt.controller.js';

const route = express.Router();

route.post('/promt', sendPromt);

export default route