import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import path from "path"
import userRouter from "./routes/userRoutes.js"

import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//app config 
const app = express()


// middleware
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

//db connection
connectDb()

//api endpoints
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server started on port : ${process.env.PORT}`);
})