import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import DemandeCard from "../components/DemandeCard"
import DemandeDetailsCard from "../components/DemandeDetailsCard"
import Navbar from "../components/Navbar"
import '../styles/citoyennavbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FonctionnaireArronNavbar from '../components/FonctionnaireArronNavbar'
import ReclamationCard from "../components/ReclamationCard"
import ReclamationCardDetails from "../components/ReclamationCardDetails"
import DemandeInscriptionCard from "../components/DemandeInscriptionCard"
import DemandeInscriptionCardDetails from "../components/DemandeInscriptionCardDetails"
import { useEffect, useState } from "react"
import axios from "axios"
import DemandeInscriptionCardList from "../components/DemandeInscriptionCardList"
import { useSession } from "../../SessionContext"
import Login from "./Login"
import DemandeConformiteCardList from '../components/DemandeConformiteCardList'
import DemandeConformiteCardDetails from '../components/DemandeConformiteCardDetails'


function FonctionnaireDemandesConformite() {

    const { sessionId } = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    const [selectedInscription, setSelectedInscription] = useState(null);
    const [date, setDate] = useState('');
    const [id, setId] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');

    const handleSelectInscription = (inscription, id, date, nom, prenom) => {
        setSelectedInscription(inscription);
        setDate(date);
        setNom(nom);
        setPrenom(prenom);
        setId(id);
        console.log(inscription);
    };

  return (
    checkId(sessionId) ? <Login /> : (
        <div className="w-full font-cairo">
        <FonctionnaireArronNavbar />
        <div className="sections">
            <div className="sections-content flex justify-center flex-wrap items-baseline pt-10">
                <div className="first">
                    <div className="title pb-4">
                        <h1 className="text-sm font-bold border-b-2 border-b-[#C3C5C3] text-center pb-3">Vous pouvez consulter les demandes de conformité des citoyens ci-dessous.</h1>
                    </div>
                    <div className="first-content">
                        <DemandeConformiteCardList onSelectInscription={handleSelectInscription} />
                    </div>
                </div>
                <div className="second pl-6">
                    <div className="second-content">
                        {selectedInscription && <DemandeConformiteCardDetails id = {id} 
                        nom = {nom} prenom = {prenom} date = {date} inscription={selectedInscription} />}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  )
}

export default FonctionnaireDemandesConformite