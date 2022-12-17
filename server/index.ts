import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "./controllers/index"

const products = express.Router();

app.post("/products", createProduct)
products.get("/", getAllProducts)
products.get("/:id", getProductById)
products.patch("/:id", updateProduct)
products.delete("/:id", deleteProduct)

app.use("/products", products);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});