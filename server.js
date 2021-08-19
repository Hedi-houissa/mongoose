// require express
const express = require("express");
//create instance
app = express();
//require dotenv
require("dotenv").config();
//port
const port = process.env.Port;
//connect db
const connectDB = require('./connectDB')
connectDB()
//body parser
app.use(express.json())
//route
const router = require('./route/person')
app.use('/persons/',router)


//create server
app.listen(port, (error) => {
  error
    ? console.log("can note run server ")
    : console.log(`server run in ${port}`);
});


