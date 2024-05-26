import { Router } from "express";
import { createOrder, getOrders, getOrder, updateOrder, deleteOrder } from "../controllers/orders.controllers.js";

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/', getOrders);
orderRouter.get('/:id', getOrder);
orderRouter.put('/:id', updateOrder);
orderRouter.delete('/:id', deleteOrder);

export default orderRouter;