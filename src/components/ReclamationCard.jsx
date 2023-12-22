import React from 'react'

function ReclamationCard({id, email, date, nom, selectReclamation}) {
  return (
        <button onClick={selectReclamation} className='font-cairo text-left border border-[#2557A7] w-96 rounded-xl px-2 my-4'>
            <div className="content space-y-2">
                <h1 className='font-bold text-2xl pt-2'>Par {nom}</h1>
                <p className='font-semibold  '><a href="#" className='text-[#007ad9] text-md underline'>{email}</a></p>
                <p ><span className='font-semibold'>ID Reclamation</span> : {id}</p>
                <p className='text-sm border-b border-b-[#a7a9a7] pb-2'>Réclamée le <span className='text-[#727572]'>{date}</span></p>
                <p className='text-normal text-[#2557A7] pb-2 text-center'>Voir plus de details</p>
            </div>
        </button>
  )
}

export default ReclamationCard