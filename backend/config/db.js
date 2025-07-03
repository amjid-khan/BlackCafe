import mongoose from "mongoose";

const connectDb = async () => {
    await mongoose
        .connect(process.env.DB_URL)
        .then(() => console.log("MongoDB Connected successfully"))
        .catch((err) => console.log("Error while connecting mongoDB", err));
};

export default connectDb;
