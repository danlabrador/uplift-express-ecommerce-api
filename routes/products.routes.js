import { Router } from 'express';
import { createProduct, getProduct, getProducts, updateProduct } from '../controllers/products.controllers.js';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', createProduct);
productsRouter.put('/:id', updateProduct);

export default productsRouter;
