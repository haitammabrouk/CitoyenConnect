import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function ConformiteEnCours() {
  return (
    <div className="w-8/12 font-cairo">
        <div className="page-content min-h-screen flex justify-center">
            <div className="submission-message pt-20">
                <div className="icon py-5 flex justify-start items-center text-[#336C4E] space-x-4">
                    <span><FontAwesomeIcon size="5x" icon={faCircleCheck} /></span><h3 className="text-3xl font-semibold">En cours de traitement</h3>
                </div>
                
                <p className=" text-xl w-text py-2 font-semibold">Merci pour votre soumission ! Votre demande est en cours de traitement . Pour suivre l'état de votre demande, veuillez revenir périodiquement.  </p>
                <p className=" text-xl text-[#4A4D49] font-light">Merci de votre confiance.</p>
            </div>
        </div>
    </div>
  )
}

export default ConformiteEnCours