const Wishlist = require('../model/wishlist.model');

const createWishlistHandler = async (req,res)=>{
    const newWishlist = new Wishlist(req.body);
    try{
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }
    catch(err){
        res.status(500).json({message: "Error creating a wishlist"});
    }
}

const deleteWishlistHandler = async (req,res)=>{
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({message: "Hotel Deleted From Wishlist successfully"});
    }
    catch(err){
        res.status(500).json({message: "Error Deleting Hotel from wishlist"});
    }
}

const getWishlistHandler = async (req,res)=>{
    try{
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({message: "Empty Wishlist"});
    }
    catch(err){
        res.status(500).json({message: "Error in retrieving Wishlist"});
    }
}

module.exports = { createWishlistHandler, deleteWishlistHandler , getWishlistHandler };