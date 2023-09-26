const express = require('express');
const router = express.Router();

const getAllCategoryHandler = require("../controllers/categoryController");

router.route("/")
    .get(getAllCategoryHandler);

module.exports = router;