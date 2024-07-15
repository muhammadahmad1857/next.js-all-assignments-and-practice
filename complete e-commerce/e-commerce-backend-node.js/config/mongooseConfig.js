const mongoose = require("mongoose");

// const connection = {};
const mongooseConnection = async () => {
  try {
    // if (connection.isConnected) {
    //   return;
    // }
    const mongodb = await mongoose.connect("mongodb+srv://ahmedjawad1857:ahmad123@todo-db.sljkn6z.mongodb.net/?retryWrites=true&w=majority");
    // connection.isConnected = mongodb.connections[0].readyState;

    console.log("mongoose connected!");
  } catch (e) {
    console.log("mongoose connection error", e);
  }
};
const productSchema = {
  description: String,
  image: String,
  title: String,
  quantity: Number,
  price: Number,
  category: String,
  userId: String,
  dateField: {
    type: Date,
  },
  maxQuantity: Number,
  productId: String,
};
const orderSchema = {
  firstName: String,
  lastName: String,
  country: String,
  city: String,
  address: String,
  mobileNumber: Number,
  emailAddress: String,
  state: String,
  checkoutDetails: [
    {
      productId: String,
      quantity: Number,
      description: String,
      title: String,
      image: String,
      price: Number,
    },
  ],
  product: [
    {
      productId: String,
      quantity: Number,
    },
  ],
};

const userSchema = {
  email: String,
  password: String,
  isAdmin: String,
};

const product = mongoose.model("Product", productSchema);
const cart = mongoose.model("cart", productSchema);
const checkOut = mongoose.model("checkOut", orderSchema);
const user = mongoose.model("user", userSchema);
exports.mongooseConnection = mongooseConnection();
module.exports = { product, cart, checkOut, user };
