const axios = require('axios');
const multer = require('multer');
const cloudinary= require('../middlewares/cloudinary')
const storage = multer.memoryStorage();
const upload = multer({ storage });
const FormData = require('form-data');
const fs = require('fs');

module.exports.sendForClassification = async (req, res) => {
  try {
    if(!req.file) {
      res.status(400).json({ error: 'Please upload an image' });
    }
    else{
    console.log(req.file);

    // const formData = new FormData();
    // formData.append('image', req.file)
    const formData = new FormData();
    formData.append('image', fs.createReadStream(req.file.path),{
      filename: req.file.originalname,
    });

    const finalReport = await axios.post('http://127.0.0.1:8080/upload_image',formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
    });
    if (finalReport.data.error) {
      // Handle error from finalReport.error
      console.error('Final Report Error:', finalReport.data.error);
      res.status(500).json({ error: 'Final Report Error' });
    } else {
      // Send success response with the report data
      res.status(200).json({ report: finalReport.data });
    }
    

    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};


