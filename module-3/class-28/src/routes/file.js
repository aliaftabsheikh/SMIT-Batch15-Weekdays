const express = require('express');
const { upload } = require('../lib/multer');
const { uploadToCloudinary } = require('../lib/utils');


const fileRouter = express.Router();

fileRouter.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log(req.file.buffer);

    const result = await uploadToCloudinary(req.file.buffer);

    res.status(200).json({
      message: "Upload successful",
      imageUrl: result.secure_url,
      publicId: result.public_id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




module.exports = {
    fileRouter
};