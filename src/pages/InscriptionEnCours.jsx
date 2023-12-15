import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function InscriptionEnCours() {
  return (
    <div className="w-full font-cairo">
        <Navbar />
        <div className="page-content min-h-screen flex justify-center">
            <div className="submission-message pt-20">
                <div className="icon py-5 flex justify-start items-center text-[#336C4E] space-x-4">
                    <span><FontAwesomeIcon size="5x" icon={faCircleCheck} /></span><h3 className="text-3xl font-semibold">En cours de traitement</h3>
                </div>
                
                <p className=" text-xl w-text py-2 font-semibold">Votre demande d'inscription est en cours de traitement. Bientôt, vous recevrez un code spécial par e-mail. Utilisez ce code pour finaliser votre inscription et bénéficier de tous nos services. </p>
                <p className=" text-xl text-[#4A4D49] font-light">Merci de votre confiance.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default InscriptionEnCours