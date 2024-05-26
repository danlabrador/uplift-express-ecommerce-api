import { parseDataFromStorage, overwriteDataInStorage } from "../../util/manageDataJson.js";

const updateOrder = (req, res) => {
  try {
    let { orders } = parseDataFromStorage();
    const orderId = req.params.id;
    const requestedOrder = orders.find(order => order.id === orderId);
  
    if (!requestedOrder) {
      res.status(404).send({
        error: "Not Found",
        message: "Order not found."
      });
      return;
    }
    
    orders = orders.map((order) => {
      if (order.id === orderId) {
        return {
          ...req.body,
          id: orderId
        }
      } else {
        return order
      }
    })
  
    overwriteDataInStorage(orders, 'orders')
    const updatedOrder = orders.find(order => order.id === orderId);
    res.status(200).send({
      message: 'Order updated.',
      data: updatedOrder
    });
    return;

  } catch {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error updating order."
    });
  }
}

export default updateOrder;