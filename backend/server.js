import express from "express"
import cors from "cors"
import connectDb from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import path from "path"
import userRouter from "./routes/userRoutes.js"
import dotenv from "dotenv"
dotenv.config()

//app config 
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

//db connection
connectDb()

//api endpoints
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)


app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
})