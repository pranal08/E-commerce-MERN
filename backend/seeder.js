import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();  //deletes all existing data in the collection 
    await Product.deleteMany(); //"await" used as it returns a promise
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("DATA IMPORTED...");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("DATA DESTROYED...");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
//add script in package.json of root folder
//"data:import" : "node backend/seeder" 
//"data:destroy" : "node backend/seeder -d" 
