const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

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

module.exports = Product;
