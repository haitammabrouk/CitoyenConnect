import React, { useRef } from 'react';
import SignaturePad from '../components/SignarturePad';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function DeclarationHonneurTemplate() {
  const pdfRef = useRef();

  const downloadPdf = () => {
    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('document.pdf');
    });
  };

  return (
    <div className='w-full font-cairo'>
      <div className="page flex justify-center pt-20">
        <div className="page-content px-3 " ref={pdfRef}>
          <div className="title pb-5">
            <h1 className='text-center text-4xl font-semibold'>
              تصريح بالشرف
            </h1>
          </div>
          <div className="texte text-right pb-2 space-y-2">
            <p>
              <input className='pr-1 h-10 outline-none border-[#b8b8b8] border mr-2' dir='rtl' />
              أنا الموقع أسفله، أنا السيد
            </p>
            <p>
              لحامل لبطاقة التعريف الوطنية رقم :
              <input className='pr-1 ml-2 outline-none h-10  border-[#b8b8b8] border mr-2' dir='rtl' />
              أصرح بشرفي أنني
            </p>
            <ul className='space-y-2'>
              <li>لم أستفد من أي تعويض في إطار المغدرة الطوعية لدى إدارة عمومية أو مؤسسة عمومية أو جماعة ترابية أو فرة من شركة عامة أو هيئات عمومية أخرى</li>
              <li>
                <p>لم أستفد التقاعد النسبي</p>
              </li>
              <li>لا أزاول أي وظيفة أو نشاط في القطاع الخاص</li>
              <li>
                غير مرتبط(ة) بأي عقد شغل مع أي مشغل و أنني أتحمل كامل المسؤولية في التبعات القانونية المترتبة عن
              </li>
              <li>المقتضيات القانونية المنصوص عليها في المادة 42 من مدونة الشغل .</li>
              <li className='text-center pt-5 text-2xl font-semibold'>توقيع المصرح</li>
            </ul>
          </div>
          <div className="flex justify-center pt-2">
             <SignaturePad /> 
          </div>
        </div>
      </div>
      <div className="btn flex justify-center pt-8">
          <button className='bg-[#336C4E] px-3 py-1 text-[#ffffff] rounded-md' onClick={downloadPdf} type='button'>
            Générer
          </button>
        </div>
    </div>
  );
}

export default DeclarationHonneurTemplate;
