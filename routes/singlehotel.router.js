const express = require('express');

const router = express.Router();

const singleHotelHandler = require("../controllers/singleHotelController");

router.route("/:id")
    .get(singleHotelHandler);

module.exports = router;