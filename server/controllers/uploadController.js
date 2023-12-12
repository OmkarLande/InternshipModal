const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const Student = require('../models/Student');

const uploadController = async (req, res) => {
  try {
    const uploadedFile = req.file;

    // GettingFileExtension
    const fileExtension = path.extname(uploadedFile.originalname);
    
    //file-CSV?
    if (fileExtension.toLowerCase() !== '.csv') {
      return res.status(400).json({ error: 'Uploaded file must be a CSV file.' });
    }

    // ReadCSV
    const students = [];
    const parser = fs.createReadStream(uploadedFile.path).pipe(csv({ columns: true }));

    parser
      .on('data', (row) => {
        // Normalize keys 
        const normalizedRow = Object.keys(row).reduce((acc, key) => {
          const normalizedKey = key.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
          acc[normalizedKey] = row[key];
          return acc;
        }, {});

        // JSON direct in normalized keys
        const student = {
          studentName: normalizedRow.studentname,
          prn: normalizedRow.prn,
        };

        students.push(student);
      })

      .on('end', async () => {
        //saving
        await Student.insertMany(students);
        res.json({ message: 'CSV file uploaded and data saved successfully', file: uploadedFile });
      });

  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = uploadController;
