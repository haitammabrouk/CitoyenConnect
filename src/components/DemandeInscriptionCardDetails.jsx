import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function DemandeInscriptionCardDetails({ inscription, nom, id, date }) {

    const [raison, setRaison] = useState('');
    const [checkAccept, setCheckAccept] = useState(false);
    const [checkRejet, setCheckRejet]= useState(false);

    const handleRaisonChange = (e) => {
        setRaison(e.target.value);
    }

    const setRejeter = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/inscription-rejeter`, null, {
        params: {
            id: id,
            raison:raison
        }
        })
        .then((response) => {
            console.log("rapport est rejete");
            setRaison('');
            setCheckRejet(true)
            
        }).catch((error) => {
            console.log("rapport n'est pas rejete");
        })
    }

    const setAccepter = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/inscription-accepter`, null, {
        params: {
            id: id,
        }
        })
        .then((response) => {
            console.log("rapport est accepte");
            setCheckAccept(true);
            
        }).catch((error) => {
            console.log("rapport n'est pas accepte");
        })
    }

  return (
    <div className='font-cairo border border-[#727572] w-insc rounded-md pb-2'>
        <div className="content space-y-2 pb-4 px-4">
                <h1 className='text-xl font-semibold pt-2 '>Demande D'Inscription</h1>
                <p ><span className='font-semibold'>ID</span> : {id}</p>
                <p ><span className='font-semibold text-[#636363]'>a été soumis par </span> : <span className='font-semibold'>{nom}</span>
                <span className='font-semibold text-[#636363] pl-2'>, le </span> <span className='font-semibold'>{date}</span></p>
        </div>
        <div className="infos px-4">
            <p className="text-sm underline text-[#007ad9]"><Link to={`/fonctionnaire-demandes-inscription-details/${id}`}>
            Vérifier les Informations Personnelles du Citoyen(lien)
          </Link></p>
            <div className="infos-content space-y-6 pb-3">
                <div className="message pt-3">
                    <ul className='text-md text-[#636363] font-semibold  flex justify-around space-x-3'>
                        <li className='border-r border-r-[#000000]'><p>Pour accepter la demande, sélectionnez 'Accepter la Demande'</p>
                        <button onClick={setAccepter} className='py-2 px-4 mt-2 bg-[#58815c] text-[#ffffff]'>Accepter La Demande</button>
                        {
                            checkAccept && <p className=" pt-2 font-bold text-sm text-[#2b5b41]">Le demande inscription a ete accepte.</p>
                        }
                        </li>
                        <li className='pl-2'><p>Pour rejeter la demande, spécifiez la raison du rejet et sélectionnez 'Rejeter la Demande'</p>
                        <form onSubmit={setRejeter} method='post'>
                            <textarea onChange={handleRaisonChange} value={raison} className='h-44 w-full mt-4 outline-none border border-[#636363] text-[#636363] px-2 py-2 rounded-lg' name="raison" id="raison" cols="30" rows="10" placeholder='la raison du rejet'></textarea>
                            <button className='py-2 px-4 mt-2 bg-[#86433b] text-[#ffffff]'>Rejeter La Demande</button>
                        </form>
                        {
                            checkRejet && <p className=" pt-2 font-bold text-sm text-[#86433b]">Le demande inscription a ete rejete.</p>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DemandeInscriptionCardDetails