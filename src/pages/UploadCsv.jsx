// UploadCsv.js
import React from "react";
import FileUploader from "../components/FileUploader";

function UploadCsv() {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Upload CSV File</h1>
      <div className="text-left mb-4">
        <p className="mb-2">Please follow the instructions:</p>
        <ul className="list-disc pl-6">
          <li>Ensure the file contains only two columns.</li>
          <li>Column names should be "studentname" and "prn".</li>
          <li>File should be in .csv format.</li>
        </ul>
      </div>
      <FileUploader />
    </div>
  );
}

export default UploadCsv;
