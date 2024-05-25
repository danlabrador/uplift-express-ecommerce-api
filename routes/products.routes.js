import { Router } from 'express';
import { getProduct, getProducts } from '../controllers/products.controllers.js';

const productsRouter = Router();

productsRouter.get('/', getProducts)
productsRouter.get('/:id', getProduct)

export default productsRouter;
