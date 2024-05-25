import { parseDataFromStorage } from '../../util/manageDataJson.js';

const getProduct = (req, res) => {
  try {
    const data = parseDataFromStorage();
    const productId = req.params.id;
    const requestedProduct = data.products.find(product => product.id === productId);

    if (typeof productId !== 'string') {
      res.status(400).send({
        error: 'Bad Request',
        message: 'Product ID needs to be in UUID format.'
      })
    }

    if (!requestedProduct) {
      res.status(404).send({
        error: 'Not Found',
        message: 'Product with the ID provided does not exist.'
      })
    }

    res.status(200).send({
      message: "Product found.",
      data: requestedProduct
    })

    return res.status(200).json(data.products);
  } catch {
    res.status(500).send({
      error: "Internal Server Error",
      message: "Error retrieving product."
    });
  }
};

export default getProduct;
