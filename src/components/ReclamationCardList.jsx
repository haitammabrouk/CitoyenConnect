import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReclamationCard from './ReclamationCard';

function ReclamationCardList({onSelectReclamation}) {

  const [reclamations, setReclamations] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/get-reclamations`)
        .then((response) => {
            setReclamations(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log("error fetching reclamations ");
        });
      }, []);



  return (
    <div>
        <ul>
      {
        reclamations.map((reclamation) => 

        <li key={reclamation.id}><ReclamationCard id = {reclamation.id} nom = {reclamation.nom}
        email = {reclamation.email} message = {reclamation.message} date={reclamation.date} selectReclamation={() => onSelectReclamation(reclamation, reclamation.id, reclamation.date, reclamation.nom, reclamation.message)} /> </li>
        )
      }
      </ul>
    </div>
  )
}

export default ReclamationCardList