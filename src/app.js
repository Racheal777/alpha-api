 
 import express from "express";
 import dotenv from 'dotenv'
 import mongoose from 'mongoose'
 import cors from 'cors'
 import { router } from "./routes/allroutes.js";


dotenv.config()

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)

const mongoUri = process.env.MONGO_URI
 mongoose.connect(mongoUri).then(() => {
    console.log('Database connected')
 }).catch((error) => console.log(error))



app.listen(PORT, () => {
    console.log(" Express app is running " + PORT)
})
