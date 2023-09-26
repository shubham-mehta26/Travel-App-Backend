const Category = require("../model/category.model");

const getAllCategoryHandler = async (req,res)=>{
    try{
        const categories = await Category.find({});
        res.json(categories);
    }
    catch(err){
        res.status(404).json({message: "No categories found"});
    }
}

module.exports = getAllCategoryHandler;