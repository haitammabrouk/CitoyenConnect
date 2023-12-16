import React from 'react'

function DeclarationHonneurTemplate() {
  return (
    <div className='w-full font-cairo'>
        <div className="page flex justify-center pt-24">
            <form action="" method='post'>
            <div className="page-content">
                <div className="title pb-5">
                    <h1 className='text-center text-4xl font-semibold'>
                    تصريح بالشرف
                    </h1>
                </div>
                <div className="texte text-right space-y-2">
                    <p><input className='pr-1 outline-none border-[#000000] border mr-2' dir='rtl'  />
                        أنا السيد(ة)</p>
                    <p>لحامل لبطاقة التعريف الوطنية رقم :<input className='pr-1 outline-none border-[#000000] border mr-2' dir='rtl'  />  أصرح بشرفي أنني </p>
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
                    </ul>
                </div>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default DeclarationHonneurTemplate