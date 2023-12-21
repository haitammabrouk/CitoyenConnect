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


function FonctionnaireArronDemandeInsc() {
  return (
    <div className="w-full font-cairo">
        <FonctionnaireArronNavbar />
        <div className="sections">
            <div className="sections-content flex justify-center flex-wrap items-baseline pt-10">
                <div className="first">
                    <div className="title pb-4">
                        <h1 className="text-sm font-bold border-b-2 border-b-[#C3C5C3] text-center pb-3">Vous pouvez consulter les demandes d'inscription des citoyens ci-dessous.</h1>
                    </div>
                    <div className="first-content">
                        <DemandeInscriptionCard />
                    </div>
                </div>
                <div className="second pl-6">
                    <div className="second-content">
                        <DemandeInscriptionCardDetails />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FonctionnaireArronDemandeInsc