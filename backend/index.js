const express = require('express');
const app =express();
const connectDB = require("./config/db");
const myroutes =require("./myroutes");
const dotenv =require("dotenv");

dotenv.config();
connectDB();

app.use(express.json());
app.use('/notes',myroutes);


app.listen(5000,()=>{
    console.log(`Server is running at port ${5000}`);
})