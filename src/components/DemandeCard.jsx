import React from 'react'

function DemandeCard() {
  return (
    <div className='font-cairo border border-[#2557A7] w-96 rounded-xl px-2 my-3'>
        <a href="#">
            <div className="content space-y-2">
                <h1 className='text-xl font-semibold pt-2 '>Acte de naissance</h1>
                <p ><span className='font-semibold'>ID</span> : AX12</p>
                <p ><span className='font-semibold'>Statut</span> : <span className='bg-[#ADC1B6] text-[#1b5837] font-semibold rounded-sm px-1 '>Disponible</span></p>
                <p className='text-sm border-b border-b-[#a7a9a7] pb-2'>a été soumis le <span className='text-[#727572]'>07/09/2003</span></p>
                <p className='text-normal text-[#2557A7] pb-2 text-center'>Voir plus de details</p>
            </div>
        </a>
    </div>
  )
}

export default DemandeCard