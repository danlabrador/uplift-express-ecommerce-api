import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
const HOST = 'localhost'; // Replace with your host

const app = express();
app.use(express.json());
app.use('/', (_, res) => res.send({ "app": "hw-express-ecommerce-api" }));

app.listen(PORT, () => {
  const url = `http://${HOST}:${PORT}`;
  console.log(`Server is listening at ${url}.`);
});
