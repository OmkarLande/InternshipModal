const express = require('express');
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.csv'); 
  },
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), uploadController);

module.exports = router;
