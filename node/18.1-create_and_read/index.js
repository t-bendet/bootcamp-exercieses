const mongoose = require("mongoose");
const validator = require("validator");
const express = require("express");
const uniqueValidator = require("mongoose-unique-validator");

mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("Price must be a a positive number");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      required: true,
      validate(value) {
        if (value.length < 2) {
          throw new Error("You must add at least two images");
        }
      },
    },
  },
  ///
  phoneNumber: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value, "he-IL")) {
        throw new Error("phone number most be a valid isrealy phone number");
      }
    },
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

mongoose.plugin(uniqueValidator);

const app = express();
const port = 3000;

app.use(express.json());

//1.Create a product
app.post("/products", (req, res) => {
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
app.get("/products", (req, res) => {
  Product.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
//2. Get a specific product
app.get("/products/:_id", (req, res) => {
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
app.get("/products/filter/active", (req, res) => {
  Product.find({ isActive: true })
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
//4. Get products with a specific price range(example min = 50 max = 500)
app.get("/products/filter/:min/:max", (req, res) => {
  const { min, max } = req.params;
  Product.find({ "details.price": { $gte: min, $lte: max } })
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
