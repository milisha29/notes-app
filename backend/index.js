const express = require('express');
const app =express();
const connectDB = require("./config/db");
const myroutes =require("./myroutes");
const dotenv =require("dotenv");

dotenv.config();
connectDB();

app.use(express.json());
app.use('/notes',myroutes);

const port = process.env.PORT || 5000;
app.listen(5000,()=>{
    console.log(`Server is running at port ${port}`);
})