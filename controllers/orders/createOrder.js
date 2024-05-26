import { parseDataFromStorage, overwriteDataInStorage } from "../../util/manageDataJson.js";
import { randomUUID } from "crypto";

const validateOrder = (order) => {
  if (!order.products || !Array.isArray(order.products)) {
    return "Invalid or missing 'products' field. It should be an array.";
  }
  
  for (const product of order.products) {
    if (typeof product.quantity !== 'number' || product.quantity <= 0) {
      return "'quantity' should be a positive number.";
    }
  }
  
  return null;
}

const createOrder = (req, res) => {
  try {
    const validationError = validateOrder(req.body);
    if (validationError) {
      return res.status(400).send({
        error: "Bad Request",
        message: validationError
      });
    }

    const { orders } = parseDataFromStorage();

    const id = randomUUID();
    const userId = randomUUID();
    const date = new Date().toISOString();
    const products = req.body.products.map((product) => ({
      productId: randomUUID(),
      quantity: product.quantity
    }));
    const newOrder = { id, userId, date, products };
    orders.push(newOrder);
    overwriteDataInStorage(orders, 'orders');

    res.status(201).send({
      message: "Order created.",
      data: newOrder
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error creating order."
    });
  }
}

export default createOrder;