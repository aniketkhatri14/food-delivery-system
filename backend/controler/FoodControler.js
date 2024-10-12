import FoodModel from "../models/FoodModel.js";
import fs from 'fs';

// add food items
const addFood = async (req, res) => {
    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    
    // Get the uploaded image filename
    let image_filename = `${req.file.filename}`;

    // Create a new food item
    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        // Save the food item to the database
        await food.save();
        // Return success response
        res.json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.log(error);
        // Return error response
        res.status(500).json({ success: false, message: "Error adding food item" });
    }
};

export { addFood };
