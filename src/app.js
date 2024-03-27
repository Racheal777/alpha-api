 
 import express from "express";
 import dotenv from 'dotenv'
 import mongoose from 'mongoose'
 import cors from 'cors'
 import { router } from "./routes/allroutes.js";
 import { handleRequests, init, handleResponses } from "express-oas-generator";

 //const expressOasGenerator = require('express-oas-generator');
 

 
 const modelNames = mongoose.modelNames();
 
dotenv.config()

const PORT = process.env.PORT || 8080

const app = express();
handleResponses(app);

app.use(express.json())
app.use(cors())
app.use(router)

const mongoUri = process.env.MONGO_URI
 mongoose.connect(mongoUri).then(() => {
    console.log('Database connected')
 }).catch((error) => console.log(error))



app.listen(PORT, () => {
    init(
        app,
        (spec) => {
          spec.info = {
            title: "Portfolio API Documentation",
            description: "API Documentation for Portfolio website",
          };
          spec.host = "alpha-api-sl31.onrender.com";
          spec.schemes = ["http", "https"];
    
          return spec;
        },
        "./swagger.json",
        60 * 1000,
        "api-docs",
        modelNames,
        ["users"],
        ["development"],
        true
      );
    
    console.log(" Express app is running " + PORT)
})

app.use(router);

handleRequests();