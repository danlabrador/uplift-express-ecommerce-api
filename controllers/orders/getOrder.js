import { parseDataFromStorage } from "../../util/manageDataJson.js";

const getOrder = (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId || typeof orderId !== 'string') {
      return res.status(400).send({
        error: "Bad Request",
        message: "Invalid or missing order ID."
      });
    }

    const data = parseDataFromStorage();

    if (!data || !Array.isArray(data.orders)) {
      return res.status(500).send({
        error: "Internal Server Error",
        message: "Invalid data structure."
      });
    }

    const requestedOrder = data.orders.find(order => order.id === orderId);

    if (!requestedOrder) {
      return res.status(404).send({
        error: "Not Found",
        message: "Order not found."
      });
    }

    res.status(200).send({
      message: "Order found.",
      data: requestedOrder
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error retrieving order."
    });
  }
}

export default getOrder;