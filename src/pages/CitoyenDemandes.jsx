import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import DemandeCard from "../components/DemandeCard"
import DemandeDetailsCard from "../components/DemandeDetailsCard"
import Navbar from "../components/Navbar"
import '../styles/citoyennavbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CitoyenNavbar from "../components/CitoyenNavbar"


function CitoyenDemandes() {
  return (
    <div className="w-full font-cairo">
        <CitoyenNavbar />
        <div className="sections">
            <div className="sections-content flex justify-center items-center pt-10">
                <div className="first">
                    <div className="filters pb-5 flex justify-between ">
                        <div className="first-filter">
                            <p></p>
                            <div className="dropdown border border-[#000000] rounded-sm py-2 px-2">
                                <button className="dropbtn"><span className="pr-3">Type du document</span><span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                                <div className="dropdown-content">
                                    <a href="#">Acte De naissance</a>
                                    <a href="#">Declaration de celibat</a>
                                    <a href="#">Demande d'egalisation</a>
                                    <a href="#">Demande de signature</a>
                                    <a href="#">Declaration de construction</a>
                                    <a href="#">Declaration d'honneur</a>
                                    <a href="#">Declaration de deces</a>
                                </div>
                            </div>
                        </div>
                        <div className="second-filter">
                            <p></p>
                            <div className="dropdown border border-[#000000] rounded-sm py-2 px-2">
                            <button className="dropbtn"><span className="pr-3">Disponibilite</span><span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                            <div className="dropdown-content">
                                <a href="#">Disponible</a>
                                <a href="#">En Cours</a>
                                <a href="#">Rejetée</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="title pb-4">
                        <h1 className="text-sm font-bold border-b-2 border-b-[#C3C5C3] text-center pb-3">Vous pouvez consulter l'état de vos demandes ci-dessous.</h1>
                    </div>
                    <div className="first-content">
                        <DemandeCard />
                    </div>
                </div>
                <div className="second pl-6">
                    <div className="second-content">
                        <DemandeDetailsCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CitoyenDemandes