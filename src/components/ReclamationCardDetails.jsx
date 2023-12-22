import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useState } from 'react'

function ReclamationCardDetails({ reclamation, nom, id, date, message}) {

    const [reponse, setReponse] = useState('');
    const [check, setCheck] = useState(false);

    const handleReponseChange = (e) => {
        setReponse(e.target.value);
    }

    const setEnvoyer = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/reclamation-reponse`, null, {
        params: {
            id: id,
            reponse:reponse
        }
        })
        .then((response) => {
            console.log("reponse est envoye");
            setReponse('');
            setCheck(true)
            
        }).catch((error) => {
            console.log("reponse n'est pas envoye");
        })
    }


  return (
    <div className='font-cairo border border-[#727572] w-custom rounded-md'>
        <div className="content space-y-2 pb-4 px-4">
                <h1 className='text-xl font-semibold pt-2 '>Reclamation</h1>
                <p ><span className='font-semibold'>ID</span> : {id}</p>
                <p ><span className='font-semibold text-[#636363]'>Réclamée par </span> : <span className='font-semibold'>{nom}</span>
                <span className='font-semibold text-[#636363] pl-2'>, le </span> <span className='font-semibold'>{date}</span></p>
        </div>
        <div className="infos px-4">
            <p className="text-sm font-bold italic border-b border-b-[#C3C5C3] text-[#898989] text-thin">Message de reclamation</p>
            <div className="infos-content space-y-4 pb-3">
                <div className="message pt-1">
                    <p className='text-md'> 
                        {message}
                    </p>
                </div>
            </div>
            <p className="text-sm font-bold italic border-b border-b-[#C3C5C3] text-[#898989] text-thin">Réponse</p>
            <div className="infos-content space-y-4 pb-3">
                <div className="reponse pt-3">
                <ul className='text-md text-[#636363] font-normal  space-x-3'>
                        <form onSubmit={setEnvoyer} method='post'>
                            <textarea value={reponse} onChange={handleReponseChange} className='h-44 w-full outline-none border border-[#636363] text-[#636363] ' name="reponse" id="reponse" cols="30" rows="10" ></textarea>
                            <button className='py-2 px-3 mt-2 bg-[#58815c] text-[#ffffff]'>Envoyer</button>
                        </form>
                        {
                            check && <p className=" pt-2 font-bold text-sm text-[#2b5b41]">Le demande inscription a ete accepte.</p>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReclamationCardDetails