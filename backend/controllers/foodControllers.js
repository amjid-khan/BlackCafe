import foodModel from "../models/foodModel.js";
import fs from "fs"

// add food items
const addFood = async (req, res) => {
    console.log("req.file:", req.file);
    const { name, description, price, category, type } = req.body;
    const image_filename = req.file.filename;

    const food = new foodModel({
        name,
        description,
        price,
        category,
        type,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log("Error while Adding Food", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


//food List
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log("Error while fitching foods", error)
    }
}

// Remove food
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food removed" })
    } catch (error) {
        console.log("Error while removing food", error)
    }
}
export { addFood, listFood, removeFood }