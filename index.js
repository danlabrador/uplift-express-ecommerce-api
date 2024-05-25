import express from 'express';
import dotenv from 'dotenv';
import productsRouter from './routes/products.routes.js';

dotenv.config();
const PORT = process.env.PORT;
const HOST = 'localhost';
const BASE_URL = '/api/v1'

const app = express();
app.use(express.json());
app.use(`${BASE_URL}/products`, productsRouter)
app.use('/', (_, res) => res.send({ "app": "hw-express-ecommerce-api" }));

app.listen(PORT, () => {
  const url = `http://${HOST}:${PORT}`;
  console.log(`Server is listening at ${url}.`);
});
