import mongoose from "mongoose";

const connectDb = async () => {
    await mongoose
        .connect(
            "mongodb+srv://amjidkurrmywal:kurram.00@cluster0.aophofw.mongodb.net/KurramMart"
        )
        .then(() => console.log("MongoDB Connected successfully"))
        .catch((err) => console.log("Error while connecting mongoDB", err));
};

export default connectDb;
