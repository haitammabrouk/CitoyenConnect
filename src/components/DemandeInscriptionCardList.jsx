import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DemandeInscriptionCard from './DemandeInscriptionCard';


function DemandeInscriptionCardList({onSelectInscription}) {

  const [inscriptions, setInscriptions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/get-inscriptions`)
        .then((response) => {
            setInscriptions(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log("error fetching inscriptions ");
        });
      }, []);

  return (
    <div>
      <ul>
      {
        inscriptions.map((inscription) => 

        <li key={inscription.id}><DemandeInscriptionCard id = {inscription.id} nom = {inscription.nom}
        email = {inscription.email} date={inscription.date} selectInscription={() => onSelectInscription(inscription, inscription.id, inscription.date, inscription.nom)} /> </li>
        )
      }
      </ul>
    </div>
  )
}

export default DemandeInscriptionCardList