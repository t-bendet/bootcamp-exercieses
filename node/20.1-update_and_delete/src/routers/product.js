const express = require("express");
const Product = require("../models/product");
const router = new express.Router();

//1.Create a product
router.post("/products", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.send(product);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

//1. Get all products
router.get("/products", (req, res) => {
  Product.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
//2. Get a specific product
router.get("/products/:_id", (req, res) => {
  const { _id } = req.params;
  Product.findById(_id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
//3. Get products that are active
router.get("/products/filter/active", (req, res) => {
  Product.find({ isActive: true })
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
//4. Get products with a specific price range(example min = 50 max = 500)
router.get("/products/filter/:min/:max", (req, res) => {
  const { min, max } = req.params;
  Product.find({ "details.price": { $gte: min, $lte: max } })
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

//1. update a product to become active/not active and change the value of its discount.
//Make sure they can only update fields that we have in our model.
router.patch("/products/:_id", async (req, res) => {
  const { _id } = req.params;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["isActive", "details.discount"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const product = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).send();
    }

    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

//1. Delete a specific product
router.delete("/products/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(_id);

    if (!product) {
      res.status(404).send();
    }

    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

//2. Delete all products

router.delete("/products/delete/all", async (req, res) => {
  try {
    const products = await Product.deleteMany({});
    if (products) {
      res.status(404).send();
    }
    res.send(products);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
