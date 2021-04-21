const mongoose = require("mongoose");
const validator = require("validator");
const express = require("express");
const uniqueValidator = require("mongoose-unique-validator");

mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", {
  useNewUrlParser: true, //what is this?
  useCreateIndex: true, //what is this?
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

const guitar = new Product({
  name: "fender jazzmaster",
  category: "guitars",
  isActive: true,
  phoneNumber: "+972524206201",
  details: {
    description: "good playability and a significant amount of indie cred.",
    price: 8500,
    discount: 0,
    images: [1, 2, 3],
  },
});

const book = new Product({
  name: "the hobbit",
  category: "books",
  isActive: true,
  phoneNumber: "+972524206202",
  details: {
    description:
      "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien.",
    price: 78,
    images: [1, 2, 3],
  },
});

const computer = new Product({
  name: "lenovo yoga 7",
  category: "computers",
  isActive: false,
  phoneNumber: "+972524206203",
  details: {
    description: "This stylish laptop will power you through anything ",
    price: 4578,
    discount: 10,
    images: [1, 2, 3],
  },
});

guitar
  .save()
  .then(() => {
    console.log(guitar);
  })
  .catch((error) => {
    console.log(error);
  });

book
  .save()
  .then(() => {
    console.log(book);
  })
  .catch((error) => {
    console.log(error);
  });

computer
  .save()
  .then(() => {
    console.log(computer);
  })
  .catch((error) => {
    console.log(error);
  });
