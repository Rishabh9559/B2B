import mongoose from "mongoose";
import colors from 'colors';
import dotenv from "dotenv";
import products from "./Data/products.js";
import Product from "./models/productsSchema.js";
import users from "./Data/users.js";
import User from "./models/userSchema.js";
import Order from "./models/orderSchema.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async() => {
    try {
        // await mongoose.connection.once("open", () => {
        //     console.log("MongoDB Connection Opened".cyan.inverse);
        // });

        // console.log("Deleting existing data...".yellow.inverse);
        await Product.deleteMany();
        await User.deleteMany();
        await Order.deleteMany();

        const createdUser = await User.insertMany(users);

        const adminUser = createdUser[0]._id;
        
        const sampleProducts = products.map((product) => {
            return {
                ...product,
                user: adminUser,
                reviews: product.reviews.map((review) => {
                    return{
                        ...review,
                        user: adminUser,
                    };
                }),
            };
        });

        await Product.insertMany(sampleProducts);
        console.log('Data Inserted'.green.inverse);

        process.exit();

    } catch (error) {
        console.log(`Error Occured: ${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Order.deleteMany();

        console.log("Data Destroyed".green.inverse);
        process.exit();

    } catch (error) {
        console.log(`Error Occured in destroying data: ${error}`.red.inverse);
    }
}

if(process.argv[2] == '-d'){
    destroyData();
}
else{
    importData();
}