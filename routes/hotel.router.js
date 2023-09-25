const express = require('express');

const router = express.Router();
const Hotel = require("../model/hotel.model");

router.route("/").get(async (req, res) => {
        try{
            const hotels = await Hotel.find({});
            hotels ? res.json(hotels) : res.status(404).json({message: "No hotels found"});
        }
        catch(err){
            console.log(err);
        }
    });

module.exports = router;