
import express from "express";
import mongoose from "mongoose";
import { connect } from "mongoose";
import { ProductApi } from "./APIs/product-api.js";
import { userApi } from "./APIs/user-api.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
async function connectDB() {
  try {
   await mongoose.connect("mongodb://127.0.0.1:27017/anuragdb2");
    console.log("DB Connected Success");

    //Assign PORT number
    app.listen(PORT, () => {
      console.log(`Running ${PORT}`);
    });
  } catch (err) {
    console.log("Err in DB connection", err);
  }
}



connectDB();

// Routes
app.use("/product-api", ProductApi);
app.use("/user-api", userApi);

app.get("/", (req, res) => {
  res.send("Hello World from Express.js");
});

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
}

app.use(errorHandler);