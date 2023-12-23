import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import jsPDF from 'jspdf';
import cache from '../assets/CIN CC.jpg';
import pdf from '../assets/example.pdf';

const PdfToJspdf = () => {
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const transformPDFtojsPDF = async () => {
    try {
      // Load the existing PDF file (replace with your PDF file or URL)
      const existingPdfBytes = await fetch(pdf).then((res) => res.arrayBuffer());

      // Create a PDFDocument from the existing PDF bytes
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Create a new jsPDF object
      const jsPdfDoc = new jsPDF();

      // Get the first page from the PDFDocument
      const firstPage = pdfDoc.getPage(0);

      // Add an image to the new jsPDF page (replace 'your-image.jpg' with your image URL)
      jsPdfDoc.addImage(cache, 'JPEG', 10, 10, 90, 120);

      // Save the modified PDF
      jsPdfDoc.save('modifiedPdf.pdf');
      setPdfGenerated(true); // Set state to indicate PDF generation completion
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleGeneratePDF = () => {
    transformPDFtojsPDF();
  };

  return (
    <div>
      <h1>Your component content here</h1>
      {pdfGenerated ? (
        <p>PDF generated successfully!</p>
      ) : (
        <button onClick={handleGeneratePDF}>Generate PDF</button>
      )}
    </div>
  );
};

export default PdfToJspdf;
