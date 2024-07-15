const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const main = require("./config/mongooseConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { product, cart, checkOut, user } = require("./config/mongooseConfig");
const { log } = require("console");

const app = express();
const port = 8020;
app.use(cors());
app.use(bodyParser.json());
const saltRounds = 10;
const privateKey = "gdouwhgduwhdqwhdiuwqdiuwqdlhwq";
let userId;
app.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const category = req.body.category;
    const image = req.body.image;
    const newProduct = new product({
      title: title,
      description: description,
      quantity: quantity,
      price: price,
      category: category,
      image: image,
      dateField: new Date(),
    });
    const savedProducts = await newProduct.save();
    console.log("product", savedProducts);
    console.log("newProduct", newProduct);
    res.status(200).send("product is saved");
  } catch (e) {
    console.log("adding error", e);
  }
});

app.get("/get", async (req, res) => {
  try {
    const findedData = await product.find().sort({ dateField: -1 });
    // const latestProducts = await product
    //   .find()
    //   .sort({ dateField: -1 })
    //   .limit(4);
    res.status(200).json({ message: "product is got", findedData });
    console.log("findedData", findedData);
  } catch (e) {
    console.log("getting data error", e);
  }
});
app.post("/id", async (req, res) => {
  try {
    const id = req.body.id;
    console.log("id", id);
    const findedObj = await product.findOne({ _id: id });
    console.log("findedObj", findedObj);
    res.json({ findedObj: findedObj });
  } catch (e) {
    console.log(`sending id object error ${e}`);
  }
});

app.post("/cart", async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const category = req.body.category;
    const image = req.body.image;
    const productId = req.body.productId;
    const newCart = new cart({
      title: title,
      description: description,
      quantity: quantity,
      price: price,
      category: category,
      image: image,
      userId: userId,
      maxQuantity: req.body.maxQuantity,
      productId,
    });
    const savedCart = await newCart.save();
    console.log("product", savedCart);
    console.log("newCart", newCart);
    res.status(200).send("product is saved");
  } catch (e) {
    console.log("cart error", e);
  }
});

app.get("/gettingCart", async (req, res) => {
  try {
    const findedData = await cart.find({ userId: userId });
    res.status(200).json({ message: "cart is got", findedData });
  } catch (e) {
    console.log("getting cart error", e);
  }
});

app.post("/delete", async (req, res) => {
  try {
    const itemId = req.body.id;
    const result = await cart.deleteOne({ _id: itemId });
    console.log("result", result);
    res.status(200).json({
      result,

      message: "Document deleted successfully",
    });
  } catch (e) {
    console.log("deleting error", e);
    res.status(500).send("Internal Server Error");
  }
});

// app.post("/updateCart", async (req, res) => {
//   try {
//     // Extract the updated cart data from the request body
//     const updatedCartData = req.body.cart;

//     // Update each item in the cart
//     // for (let i = 0; i < updatedCartData.length; i++) {
//     //   const item = updatedCartData[i];
//     const hello = await cart.updateOne({ $set: { quantity: item.quantity } });
//     // }

//     res.status(200).send("Cart updated successfully");
//     console.log("updated cart", hello);
//   } catch (error) {
//     console.error("Error updating cart:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// app.post("/updateCart", async (req, res) => {
//   console.log("Update Cart route hit");
//   console.log("Request Body:", req.body);

//   try {
//     const filter = req.body.cart._id;
//     const update = { quantity: req.body.cart.quantity };
//     console.log("filter", filter);
//     console.log("update", update);

//     // Update the item in the cart
//     const result = await cart.updateOne({ _id: filter }, { $set: update });

//     // Output the result
//     console.log("Update Result:", result);

//     if (result.nModified === 1) {
//       res.status(200).send("Cart updated successfully");
//     } else {
//       res.status(404).send("Document not found or not modified");
//     }
//   } catch (error) {
//     console.error("Error updating cart:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
app.post("/updateCart", async (req, res) => {
  try {
    // Extract the updated cart data from the request body
    const updatedCartData = req.body.cart;

    // Loop through each item in the cart and update it
    for (let i = 0; i < updatedCartData.length; i++) {
      const item = updatedCartData[i];
      const filter = { _id: item._id };
      const update = { quantity: item.quantity };

      // Update the item in the cart
      const result = await cart.updateOne(filter, { $set: update });

      // Output the result
      console.log("Update Result:", result);
    }

    res.status(200).send("Cart updated successfully");
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).send("Internal Server Error");
  }
});

//app.post("/updateCart", async (req, res) => {
// try {
//   // Extract the updated cart data from the request body
//   // const filter = req.body.cart._id;
//   // const update = req.body.cart.quantity;
//   // // Update each item in the cart
//   // const result = await cart.updateOne({ _id: filter }, { quantity: update });

//   // // Output the result
//   // console.log("result", result);

//       // Extract the updated cart data from the request body
//       const filter = req.body.cart._id;
//       const update = { quantity: req.body.cart.quantity };
//       console.log("filter", filter);
//       console.log("update", update);

//       // Update the item in the cart
//       const result = await cart.updateOne({ _id: filter }, { $set: update });

//       // Output the result
//       console.log("Update Result:", result);

//       if (result.nModified === 1) {
//         res.status(200).send("Cart updated successfully");
//       } else {
//         res.status(404).send("Document not found or not modified");
//       }
//     } catch (error) {
//       console.error("Error updating cart:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });

// res.status(200).send("Cart updated successfully");

app.post("/checkOut", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const {
      firstName,
      lastName,
      country,
      city,
      address,
      mobileNumber,
      emailAddress,
      state,
      checkoutDetails,
      products,
    } = req.body;

    if (!Array.isArray(checkoutDetails) || !Array.isArray(products)) {
      return res
        .status(400)
        .json({ message: "Invalid data format", requestBody: req.body });
    }

    console.log("Welcome to checkout");

    // Update the inventory for each product in the order
    for (const productInfo of products) {
      console.log("Product Info:", productInfo);

      try {
        const productId = productInfo.productId;
        const remainingStock = productInfo.remainingStock;
        const updatedProduct = await product.findByIdAndUpdate(
          productId,
          { $set: { quantity: remainingStock } },
          { new: true }
        );
        console.log("Remaining", remainingStock);
        console.log("Updated Product", updatedProduct);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    }
    console.log("Mid of checkout");

    // Save the order details to the database
    const checkOuts = new checkOut({
      firstName,
      lastName,
      country,
      city,
      address,
      mobileNumber,
      emailAddress,
      state,
      checkoutDetails,
      products,
    });

    const savedDetail = await checkOuts.save();
    console.log("Saved Detail:", savedDetail);
    console.log("Bye to checkout");

    res.status(200).json({ message: "Order placed successfully" });
  } catch (e) {
    console.error("Saving order error:", e);
    res.status(500).send("Internal Server Error");
  }
});

// Add a new route for deleting all items from the cart
app.post("/deleteCart", async (req, res) => {
  try {
    // Delete all items from the cart
    const data = req.body.data;
    if (Array.isArray(data)) {
      await cart.deleteMany({});
      console.log("Cart deleted successfully");
    } else {
      res.send("cart does not deleted");
    }
  } catch (e) {
    console.log("Error deleting cart items", e);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/signUp", async (req, res) => {
  console.log("password", req.body.password);
  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    console.log("hash", hash);

    res.status(200).send("message");
    const user1 = new user({
      email: req.body.email,
      password: hash,
    });
    const savedUser = await user1.save();
    console.log("savedUser", savedUser);
  });
});

app.post("/signIn", async (req, res) => {
  try {
    const email = await req.body.email;

    const dbDataEmail = await user.findOne({ email: email });
    const dbDataId = dbDataEmail._id;
    const dbDataPassword = dbDataEmail.password;

    if (dbDataEmail) {
      console.log("email", email);
      userId = dbDataId;
      console.log("dbdata", dbDataEmail.email);
      console.log("dbdata", dbDataEmail.password);

      bcrypt.compare(req.body.password, dbDataPassword, function (err, result) {
        console.log("hashresult", result);
        if (result) {
          console.log("result is matched");
          const token = jwt.sign({ dbDataPassword }, privateKey);
          console.log("token", token);
          res.json({
            title: "You are logged in",
            description: "now you can enjoy shopping!",
            admin: dbDataEmail.isAdmin,
            status: "success",
            token: token,
          });
        } else {
          console.log("result is not matched ");
          res.json({
            title: "Your password is incorrect",
            description: "Do you want to try again",
            status: "error",
          });
        }
      });

      console.log("email is matched");
    } else {
      console.log("user doesn't signed up");
      res.json({
        title: "email address does not found",
        description:
          "check if you entered wrong email then try again or sign up",
        status: "error",
      });
    }
  } catch (e) {
    console.log("logging in error", e);
  }
});

app.listen(port, () => {
  console.log("port", port);
});
