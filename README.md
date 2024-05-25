# Express Ecommerce API

The task is to create a simple e-commerce API using ExpressJS with a coding partner.

## Instructions

We need to create an e-commerce API using ExpressJS. This approach is cleaner for defining routes and handling requests and responses compared to using the built-in HTTP module.

We will update the APIs from the previous homework (which used the built-in HTTP module) to use ExpressJS and also create new APIs.

## Dan's Tasks

Dan will set up the Express server and initialize data from `data.json`. Additionally, Dan will work with the **Products** endpoint, translating the endpoints from the NodeJS homework into ExpressJS.

### Setting Up Express Server

1. Initialize the project and install necessary dependencies.
2. Create the server using ExpressJS.
3. Load initial data from `data.json`.
4. Implement the Products endpoints.
5. For generating unique IDs for new products, use `crypto`'s `randomUUID()` function.
6. Set up an `.env` file for environment variables.

### Setting Up .env File

1. Create a `.env` file in the root of your project.
2. Add the following line to define the PORT variable:

   ```plaintext
   PORT=8080
   ```

3. Ensure that `dotenv` is installed and configure your application to use it.

### Products Endpoints

| Action | URL                   | HTTP Verb | CRUD   | Description                              |
|--------|-----------------------|-----------|--------|------------------------------------------|
| Post   | /api/v1/products      | POST      | Create | Creates a new product.                   |
| Get    | /api/v1/products      | GET       | Read   | Gets the list of products.               |
| Get    | /api/v1/products/:id  | GET       | Read   | Returns a single product by its unique identifier. |
| Put    | /api/v1/products/:id  | PUT       | Update | Updates an existing product.             |
| Delete | /api/v1/products/:id  | DELETE    | Delete | Deletes an existing product.             |

### Product Entity Shape

```json
{
  "id": "string",
  "title": "string",
  "price": "number",
  "description": "string",
  "category": "string",
  "image": "string",
  "rating": {
    "rate": "number",
    "count": "number"
  }
}
```

## Gen's Tasks

Gen will work on the **Orders** endpoint. Create new APIs for Orders.

### Orders Endpoints

| Action | URL                   | HTTP Verb | CRUD   | Description                              |
|--------|-----------------------|-----------|--------|------------------------------------------|
| Post   | /api/v1/orders        | POST      | Create | Creates a new order.                     |
| Get    | /api/v1/orders        | GET       | Read   | Gets the list of all orders.             |
| Get    | /api/v1/orders/:id    | GET       | Read   | Returns a single order by its unique identifier. |
| Put    | /api/v1/orders/:id    | PUT       | Update | Updates an existing order.               |
| Delete | /api/v1/orders/:id    | DELETE    | Delete | Deletes an existing order.               |

### Order Entity Shape

```json
{
  "id": "string",
  "userId": "number",
  "date": "string",
  "products": [
    {
      "productId": "string",
      "quantity": "number"
    }
  ]
}
```

### Important Note

For generating unique IDs for new orders, use `crypto`'s `randomUUID()` function.

---

Let's make sure to commit our changes frequently and review each other's code to ensure consistency and quality. Happy coding!
