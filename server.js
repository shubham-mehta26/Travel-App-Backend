const express = require('express');
const mongoose = require('mongoose');

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");

const connectDB = require("./config/dbconfig");
const app = express();

app.use(express.json());
connectDB(); 

const port = process.env.PORT || 3500;
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);

mongoose.connection.once("open", () => {
    console.log("Connected to database");
    app.listen(port , ()=>{
        console.log(`Server is running on port ${port}`);
    })
});