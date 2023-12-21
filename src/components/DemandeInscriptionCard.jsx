import React from 'react'

function DemandeInscriptionCard() {
  return (
    <div className='font-cairo border border-[#2557A7] w-96 rounded-xl px-2 my-3'>
        <a href="#">
            <div className="content space-y-2">
                <h1 className='font-bold text-2xl pt-2'>Par Mabrouk</h1>
                <p className='font-semibold  '><a href="#" className='text-[#007ad9] text-md underline'>haitammk0708@gmail.com</a></p>
                <p ><span className='font-semibold'>ID Inscription</span> : AX12</p>
                <p className='text-sm border-b border-b-[#a7a9a7] pb-2'>a été soumis le <span className='text-[#727572]'>07/09/2003</span></p>
                <p className='text-normal text-[#2557A7] pb-2 text-center'>Voir plus de details</p>
            </div>
        </a>
    </div>
  )
}

export default DemandeInscriptionCard