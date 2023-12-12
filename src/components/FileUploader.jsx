import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', file);
      const url = import.meta.BACK_URL;
      await axios.post(url+'/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center py-2'>
      <h2 className='py-2'>Upload CSV File</h2>
      <form onSubmit={onFormSubmit} className='flex flex-col justify-center items-center'>
        <input type="file" accept=".csv" className='py-4' onChange={onFileChange} />
        <button type="submit" className='py-2 px-5 rounded-lg mt-3 bg-blue-600'>Upload</button>
      </form>
    </div>
  );
};

export default FileUploader;
