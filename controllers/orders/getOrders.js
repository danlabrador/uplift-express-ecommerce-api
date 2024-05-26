import { parseDataFromStorage } from "../../util/manageDataJson.js";

const getOrders = (_, res) => {
  try {
    const data = parseDataFromStorage();

    return res.status(200).json({
      message: "List of orders found.",
      data: data.orders
    });
  } catch {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error retrieving orders."
    });
  }
}

export default getOrders;