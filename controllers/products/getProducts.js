import { parseDataFromStorage } from '../../util/manageDataJson.js';

const getProducts = (req, res) => {
  try {
    const data = parseDataFromStorage();

    if (!data.products || data.products.length === 0) {
      res.status(404).send({
        error: "Not Found",
        message: "No products found."
      });
      return;
    }

    return res.status(200).json(data.products);
  } catch {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error retrieving products."
    });
  }
};

export default getProducts;
