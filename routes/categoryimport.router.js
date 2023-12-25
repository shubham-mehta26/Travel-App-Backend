const express = require('express');

const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            // Adding indexing to categories
            const categoriesWithIndex = categories.data.map((c, i) => ({
                id: c.id,
                category: c.category,
                index: i + 1,
            }));

            const categoriesInDB = await Category.insertMany(categoriesWithIndex);
            res.json(categoriesInDB);
        } catch (error) {
            console.log(error);
            res.json({ message: "Could not add categories to database" });
        }
    });

module.exports = router;
