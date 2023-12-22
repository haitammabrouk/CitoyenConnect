import axios from 'axios';
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function DemandeInscriptionCardDetails({ inscription, nom, id, date }) {

    const setAccepter = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/inscription-accepter`, null, {
        params: {
            id: id
        }
        })
        .then((response) => {
            console.log("rapport est accepte");
            
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
                        </li>
                        <li className='pl-2'><p>Pour rejeter la demande, spécifiez la raison du rejet et sélectionnez 'Rejeter la Demande'</p>
                        <form action="" method='post'>
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

export default DemandeInscriptionCardDetails