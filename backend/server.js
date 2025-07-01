import express from "express"
import cors from "cors"
import connectDb from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import path from "path"

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

app.get("/", (req, res) => {
    res.send("Api working")
})

app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
})


//mongodb+srv://amjidkurrmywal:kurram.00@cluster0.aophofw.mongodb.net/