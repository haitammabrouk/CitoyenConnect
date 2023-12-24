import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DemandeInscriptionCard from './DemandeInscriptionCard';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import DemandeConformiteCard from '../components/DemandeConformiteCard'
import DemandeEgalisationCard from './DemandeEgalisationCard';


function DemandeConformiteCardList({onSelectInscription}) {

  const [inscriptions, setInscriptions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/get-egalisations`)
        .then((response) => {
            setInscriptions(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log("error fetching demandes d'egalisation ");
        });
      }, []);

  return (
    <div>
      <ul>
      {
        inscriptions.map((inscription) => 

        <li key={inscription.id}><DemandeEgalisationCard id = {inscription.id} nom = {inscription.nom} prenom={inscription.prenom}
        email = {inscription.email} date={inscription.date} selectInscription={() => onSelectInscription(inscription, inscription.id, inscription.date, inscription.nom, inscription.prenom)} /> </li>
        )
      }
      </ul>
    </div>
  )
}

export default DemandeConformiteCardList