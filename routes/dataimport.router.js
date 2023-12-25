const express = require('express');

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            // Adding indexing to hotels
            const hotelsWithIndex = hotels.data.map((h, i) => ({
                id: h.id,
                name: h.name,
                category: h.category,
                image: h.image,
                imageArr: h.imageArr,
                address: h.address,
                city: h.city,
                state: h.state,
                country: h.country,
                price: h.price,
                rating: h.rating,
                numberOfBathrooms: h.numberOfBathrooms,
                numberOfBeds: h.numberOfBeds,
                numberOfguest: h.numberOfguest,
                numberOfBedrooms: h.numberOfBedrooms,
                numberOfStudies: h.numberOfStudies,
                hostName: h.hostName,
                hostJoinedOn: h.hostJoinedOn,
                ameneties: h.ameneties,
                healthAndSafety: h.healthAndSafety,
                houseRules: h.houseRules,
                propertyType: h.propertyType,
                isCancelable: h.isCancelable,
                index: i + 1
            }));

            const hotelsInDB = await Hotel.insertMany(hotelsWithIndex);
            res.json(hotelsInDB);
        } catch (error) {
            console.log(error);
            res.json({ message: "Could not add data to the database" });
        }
    });

module.exports = router;
