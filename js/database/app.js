import express from "express";
import cors from "cors";
import {
  getUser,
  getUsers,
  getProduct,
  getProducts,
  getOrders,
  getUserOrders,
  insertUser,
} from "./database.js";

const app = express();
const port = 5500;
app.use(cors());

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.send(user);
});

app.get("/products", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await getProduct(id);
  res.send(product);
});

app.get("/orders", async (req, res) => {
  const orders = await getOrders();
  res.send(orders);
});

app.get("/orders/:userId", async (req, res) => {
  const userId = req.params.userId;
  const orders = await getUserOrders(userId);
  res.send(orders);
});

// app.get("/products/:category", async (req, res) => {
//   const category = req.params.category;
//   const product = await getCategoryProducts(category);
//   res.send(product);
// });

app.post("/users", async (req, res) => {
  const { firstName, lastName, gender, email, password, phone } = req.body;
  const user = await insertUser(
    firstName,
    lastName,
    gender,
    email,
    password,
    phone
  );
  res.send(user);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
