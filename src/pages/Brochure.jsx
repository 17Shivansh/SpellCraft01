import React from 'react';
import { Link } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const Brochure = () => {
  const brochureUrl = './src/assets/images/Brochure for web.pdf'; // Replace with your actual PDF path

  // Toolbar plugin to add PDF controls like zoom, print, etc.
  const toolbarPluginInstance = toolbarPlugin();

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Our Brochure</h2>
      {/* PDF Viewer */}
      <div className="border shadow-lg p-4 w-full max-w-4xl md:max-w-2xl sm:max-w-full overflow-auto">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={brochureUrl} plugins={[toolbarPluginInstance]} />
        </Worker>
      </div>
      {/* Download Button */}
      <a
        href={brochureUrl}
        download="Brochure.pdf"
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Brochure
      </a>
    </div>
  );
};

export default Brochure;
