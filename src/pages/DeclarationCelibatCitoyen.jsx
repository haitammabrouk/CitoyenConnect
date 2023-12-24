import React, { useRef } from 'react'
import SignaturePad from '../components/SignarturePad'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSession } from '../../SessionContext';
import Login from './Login';

function DecalarationCelibatCitoyen() {

    const { sessionId } = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

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
    checkId(sessionId) ? <Login /> : (
        <div className='w-full font-cairo'>
        <div className="page flex justify-center pt-14">
            <div className="page-content px-3" ref={pdfRef}>
                <div className="title pb-5">
                    <h1 className='text-center text-4xl font-semibold'>تصريح شرفي بالعزوبة</h1>
                </div>
                <div className="content text-right pb-2 pt-4 space-y-2">
                    <p>
                    <input className='pr-1 h-10 outline-none border-[#b8b8b8] border mr-2' dir='rtl' />
                        أنا الممضي أسفله السيد
                        
                    </p>
                    <p>
                    <input className='pr-1 h-10 outline-none border-[#b8b8b8] border mr-2' dir='rtl' />
                        المولود بتاريخ </p>
                    <p>
                    <input className='pr-1 h-10 outline-none border-[#b8b8b8] border mr-2' dir='rtl' />
                        و الحامل لبطاقة التعريف الوطنية رقم </p>
                    <p>
                    <input className='pr-1 w-80 h-10 outline-none border-[#b8b8b8] border mr-2' dir='rtl' />
                        الساكن ب </p>
                </div>
                <div className="conclusion">
                    <p>أصرح بشرفي و أنا في كامل قواي العقلية و الصحية بأنني عازب و لم يسبق لي الزواج من قبل .</p>
                </div>
                <div className="signature-content ">
                    <p className='pt-6 text-xl text-end font-semibold'>إمضاء المعني</p>
                    <div className="signature flex justify-end pt-4">
                        <SignaturePad />
                    </div>
                </div>
            </div>
        </div>
        <div className="btn flex justify-center pt-8">
          <button className='bg-[#336C4E] px-3 py-1 text-[#ffffff] rounded-md' onClick={downloadPdf} type='button'>
            Générer
          </button>
        </div>
    </div>
    )
  )
}

export default DecalarationCelibatCitoyen