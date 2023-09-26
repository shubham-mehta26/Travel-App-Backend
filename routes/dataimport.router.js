const express = require('express');

const Hotel = require("../model/hotel.model");
const hotel = require("../data/hotels");

const router = express.Router();

router.route("/")
    .post(async (req,res)=>{
        try{
            await Hotel.remove();
            const hotelsInDB = await Hotel.insertMany(hotel.data);
            res.json(hotelsInDB);
        }
        catch(error){
            console.log(error);
            res.json({message: "Could not add data to database"})
        }

    })

module.exports = router;