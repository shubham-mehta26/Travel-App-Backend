// Objective: Define the category model for the database
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: { type: String, required: true },
    category: { type: String, required: true },
    index : { type: Number, required: true}
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;