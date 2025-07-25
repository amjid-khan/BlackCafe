import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, },
    category: { type: String, required: true },
    image: { type: String, required: true }
});

const foodModel = mongoose.model("food", foodSchema)

export default foodModel