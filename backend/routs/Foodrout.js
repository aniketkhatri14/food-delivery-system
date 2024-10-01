import express from 'express'
import { addFood } from "../controler/FoodControler.js"
import multer from "multer"
import fs from "fs"

// Ensure uploads directory exists
const dir = './uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const Foodrout = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination: "./upload",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

Foodrout.post("/add", upload.single("image"), addFood)


export default Foodrout;