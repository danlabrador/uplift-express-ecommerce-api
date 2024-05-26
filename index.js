import express from 'express';
import dotenv from 'dotenv';
import orderRouter from './routes/orders.routes.js';

dotenv.config();
const PORT = process.env.PORT;
const HOST = '127.0.0.1';
const BASE_URL = '/api/v1';

const app = express();
app.use(express.json());
app.use(`${BASE_URL}/orders`, orderRouter);
app.use('/', (_, res) => res.send({ "app": "hw-express-ecommerce-api" }));

app.listen(PORT, () => {
  const url = `http://${HOST}:${PORT}`;
  console.log(`Server is listening at ${url}.`);
});
