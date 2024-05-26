import { parseDataFromStorage, overwriteDataInStorage } from "../../util/manageDataJson.js";

const deleteOrder = (req, res) => {
  try {
    const { orders } = parseDataFromStorage();
    const orderId = req.params.id;
    const hasOrder = orders.find(order => order.id === orderId);

    if (!hasOrder) {
      res.status(404).send({
        error: "Not Found",
        message: "Order does not exist."
      });
      return;
    }

    const filteredOrder = orders.filter(order => order.id === orderId);
    overwriteDataInStorage(filteredOrder, 'orders')
    res.status(204).send()
  } catch {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error retrieving order."
    });
  }
}

export default deleteOrder;