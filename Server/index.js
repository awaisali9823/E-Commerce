import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from 'cors'
import { router } from "./routes/userRoutes.js";


const app = express();
app.use(bodyParser.json())
//app.use(cors())
app.use(cors({
    origin:"http://localhost:3000",
    methods:'GET, PUT,POST, DELETE',
    allowedHeaders:['Content-Type','Authorization']
 }))


app.use("", router)
const port = 4000;

mongoose.connect('mongodb+srv://awaisali9823:Awaisali@firstdb.iekrqrc.mongodb.net/E-Commerce-Project')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
mongoose.connection.on("connected", () => {
    console.log("Database Connected")
})
