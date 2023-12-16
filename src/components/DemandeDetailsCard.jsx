import { faCircleDown, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function DemandeDetailsCard() {
  return (
    <div className='font-cairo border border-[#727572] w-custom rounded-md'>
        <div className="content space-y-2 pb-4 px-4">
                <h1 className='text-xl font-semibold pt-2 '>Acte de naissance</h1>
                <p ><span className='font-semibold'>ID</span> : AX12</p>
                <p ><span className='font-semibold'>Statut</span> : <span className='bg-[#ADC1B6] text-[#1b5837] font-semibold rounded-sm px-1 '>Disponible</span></p>
                <div className="message pb-3">
                    <p>Votre demande a été traitée avec succès ! Vous pouvez 
                        télécharger le document en cliquant sur le bouton 
                        ci-dessous</p>
                </div>
                <a href="#"><button className='text-lg font-semibold py-1 px-4 rounded-md bg-[#E4E2E0]'><span><FontAwesomeIcon icon={faCircleDown} /></span><span className='pl-2'>Document</span></button></a>
        </div>
    </div>
  )
}

export default DemandeDetailsCard