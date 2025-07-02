import express from "express";
import {
    addFood,
    listFood,
    removeFood,
} from "../controllers/foodControllers.js";
import multer from "multer";

const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const cleanName = file.originalname.replace(/\s+/g, "-");
        cb(null, uniqueSuffix + "-" + cleanName);
    },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
