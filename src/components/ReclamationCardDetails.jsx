import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ReclamationCardDetails() {
  return (
    <div className='font-cairo border border-[#727572] w-custom rounded-md'>
        <div className="content space-y-2 pb-4 px-4">
                <h1 className='text-xl font-semibold pt-2 '>Reclamation</h1>
                <p ><span className='font-semibold'>ID</span> : AX12</p>
                <p ><span className='font-semibold text-[#636363]'>Réclamée par </span> : <span className='font-semibold'>Mabrouk</span>
                <span className='font-semibold text-[#636363] pl-2'>, le </span> <span className='font-semibold'>07/09/2023</span></p>
        </div>
        <div className="infos px-4">
            <p className="text-sm font-bold italic border-b border-b-[#C3C5C3] text-[#898989] text-thin">Message de reclamation</p>
            <div className="infos-content space-y-4 pb-3">
                <div className="message pt-3">
                    <p className='text-md'> 
                        svp j'ai un probleme , mon nom est saisi incorrectement
                     dans ma carte nationale comment je peux le changer (aves le 
                     documents necessaires svp)
                    </p>
                </div>
            </div>
            <div className="infos-content space-y-4 pb-3">
                <div className="message pt-3">
                    <p className='font-bold text-sm italic text-[#747474]'> 
                    (Veuillez utiliser l'e-mail du citoyen pour répondre à sa réclamation)
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReclamationCardDetails