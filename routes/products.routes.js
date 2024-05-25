import { Router } from 'express';
import { createProduct, getProduct, getProducts } from '../controllers/products.controllers.js';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', createProduct);

export default productsRouter;
