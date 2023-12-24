import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function DemandeConformiteCardDetails({ inscription, nom, prenom, id, date }) {


  return (
    <div className='font-cairo border border-[#727572] w-insc rounded-md pb-2'>
        <div className="content space-y-2 pb-4 px-4">
                <h1 className='text-xl font-semibold pt-2 '>Demande De Conformité</h1>
                <p ><span className='font-semibold'>ID</span> : {id}</p>
                <p ><span className='font-semibold text-[#636363]'>a été soumis par </span> : <span className='font-semibold'>{nom} {prenom}</span>
                <span className='font-semibold text-[#636363] pl-2'>, le </span> <span className='font-semibold'>{date}</span></p>
        </div>
        <div className="infos px-4">
            <p className="text-sm underline text-[#007ad9]"><Link to={`/fonctionnaire-demandes-inscription-details/${id}`}>
            Vérifier les informations liées à la demande.(lien)
          </Link></p>
            <div className="infos-content space-y-6 pb-3">
                <div className="message pt-3">
                    <ul className='text-md text-[#636363] font-semibold  flex justify-around space-x-3'>
                        <li className='border-r border-r-[#000000]'><p>Pour conformer la demande, sélectionnez 'Conformer la Demande'</p>
                        <button className='py-2 px-4 mt-2 bg-[#58815c] text-[#ffffff]'>Égaliser La Demande</button>

                        </li>
                        <li className='pl-2'><p>Pour rejeter la demande, spécifiez la raison du rejet et sélectionnez 'Rejeter la Demande'</p>
                        <form method='post'>
                            <textarea className='h-44 w-full mt-4 outline-none border border-[#636363] text-[#636363] px-2 py-2 rounded-lg' name="raison" id="raison" cols="30" rows="10" placeholder='la raison du rejet'></textarea>
                            <button className='py-2 px-4 mt-2 bg-[#86433b] text-[#ffffff]'>Rejeter La Demande</button>
                        </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DemandeConformiteCardDetails