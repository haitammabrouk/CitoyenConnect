import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"


function EmailSent() {
  return (
    <div className="w-full font-cairo ">
        <Navbar />
        <div className="min-h-screen">
        <div className="content flex justify-center mt-32 ">
            <div className="card bg-[#ACD2CC] flex  justify-around px-5 py-5 w-2/6">
                <div className="first-part">
                    <FontAwesomeIcon size="3x" icon={faCircleCheck} />
                </div>
                <div className="second-part pl-5">
                    <p>
                    Un lien de récupération de mot de passe a été envoyé à votre
                     adresse e-mail. Veuillez vérifier votre boîte de réception 
                     et suivez les instructions fournies pour réinitialiser 
                     votre mot de passe. 
                    </p>
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default EmailSent