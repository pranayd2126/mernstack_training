import exp from "express";
export const ProductApi = exp.Router();

let products = [];

ProductApi.get("/products", (req, res) => {
  res.status(200).send({ message: "products ", payload: products });
});
ProductApi.get("/products-id/:id", (req, res) => {
  let productId = Number(req.params.id);
  let product = req.body;
  let productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex == -1) {
    return res.status(404).send({ message: "not found" });
  }

  res.status(200).send({ message: "products fpund", payload: productIndex });
});
ProductApi.get("/products-brand/:brand", (req, res) => {
  let productBrand = req.params.brand;
  let productByBrand = products.find((p) => p.brand === productBrand);
  if (productByBrand == -1) {
    return res.status(404).send({ message: "not found" });
  }
  res.status(200).send({ message: "produts brands", payload: productByBrand });
});
ProductApi.post("/products", (req, res) => {
  let product = req.body;
  products.push(product);
  res.status(200).send({ message: "product add succesly", payload: product });
});

ProductApi.put("/products/:id", (req, res) => {
  let productId = Number(req.params.id);
  let product = req.body;
  let productIndex = products.findIndex((prod) => prod.id === productId);

  if (productIndex === -1) {
    return res.status(404).send({ message: "product not found" });
  }
  let deleted = products.splice(productIndex, 1, product);
  res
    .status(200)
    .send({ message: "product updated succesly", payload: deleted });
});
ProductApi.delete("/products/:id", (req, res) => {
  let productId = Number(req.params.id);
  let productIndex = products.findIndex((p) => p.id === productId);
  if (productId === -1) {
    return res.status(404).send({ message: "product not found" });
  }

  let deleted = products.splice(productIndex, 1);
  res
    .status(200)
    .send({ message: "prodyect deleted succedopy", payload: deleted });
});
