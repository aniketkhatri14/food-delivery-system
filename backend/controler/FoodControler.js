import FoodModel from "../models/FoodModel.js";
import fs from 'fs'

// add food items

const addFood = async (req, res) => {

    console.log("heloooo")
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
        // return res.status(200).json({ success: true, message: "file uploaded bc" });
    }
    let image_filename = `${req.file.filename}`;

    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        req.json({ sucess: true, message: "food Added" })
    } catch (error) {
        console.log(error)
        res.json({ sucess: false, message: "Error" })
    }
}

export { addFood }