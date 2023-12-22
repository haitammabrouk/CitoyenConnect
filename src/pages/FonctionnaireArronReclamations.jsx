import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import DemandeCard from "../components/DemandeCard"
import DemandeDetailsCard from "../components/DemandeDetailsCard"
import Navbar from "../components/Navbar"
import '../styles/citoyennavbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FonctionnaireArronNavbar from '../components/FonctionnaireArronNavbar'
import ReclamationCardList from "../components/ReclamationCardList"
import ReclamationCardDetails from "../components/ReclamationCardDetails"
import { useState } from "react"


function FonctionnaireArronReclamations() {

    const [selectedReclamation, setSelectedReclamation] = useState(null);
    const [date, setDate] = useState('');
    const [id, setId] = useState('');
    const [nom, setNom] = useState('');
    const [message, setMessage] = useState('');

    const handleSelectReclamation = (reclamation, id, date, nom, message) => {
        setSelectedReclamation(reclamation);
        setDate(date);
        setNom(nom);
        setId(id);
        setMessage(message);
        console.log(reclamation);
    };

  return (
    <div className="w-full font-cairo">
        <FonctionnaireArronNavbar />
        <div className="sections">
            <div className="sections-content flex flex-wrap items-baseline justify-center items-center pt-10">
                <div className="first">
                    <div className="title pb-4">
                        <h1 className="text-sm font-bold border-b-2 border-b-[#C3C5C3] text-center pb-3">Vous pouvez consulter les reclamations des citoyens ci-dessous.</h1>
                    </div>
                    <div className="first-content">
                        <ReclamationCardList onSelectReclamation={handleSelectReclamation} />
                    </div>
                </div>
                <div className="second pl-6">
                    <div className="second-content">
                    {selectedReclamation && <ReclamationCardDetails id = {id} 
                        nom = {nom} message = {message} date = {date} reclamation={selectedReclamation} />}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FonctionnaireArronReclamations