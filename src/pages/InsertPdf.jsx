import React from 'react';
import jsPDF from 'jspdf';
import tasrih from '../assets/tasrih.jpg'
import cache from '../assets/CIN CC.jpg'

const InsertPdf = () => {
  const generatePDF = () => {
    // Create a new jsPDF instance
    const pdfDoc = new jsPDF();

    // Add an image to the PDF
    pdfDoc.addImage(tasrih, 'JPEG', 10, 10, 220, 0);

    // Add the second image to the PDF (small and at the top left of the first image)
    pdfDoc.addImage(cache, 'JPEG', 15, 85, 20, 25);

    // Save the PDF with a given name
    pdfDoc.save('example.pdf');
  };

  return (
    <div>
      <h1>Create PDF with Image</h1>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default InsertPdf;
