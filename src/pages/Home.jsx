import Navbar from "../components/Navbar"
import cnie from '../assets/cnie.png'
import map from '../assets/map.png'
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="w-full ">
        <Navbar />
        <div className="homepage-content font-cairo">
            <div className="first-section pt-7 pb-8 border-[#336C4E]">
                <div className="first-section-content">
                    <div className="flex flex-wrap justify-evenly items-center">
                        <div className="first-part">
                            <h1 className="text-[#000] text-3xl font-semibold">Demande D'Inscription À Citoyen Connect</h1>
                            <p className="w-custom text-lg pt-7">Notre plateforme révolutionnaire vise à simplifier et à moderniser le processus de gestion des transactions administratives entre les citoyens, les arrondissements et les communes. Fini les déplacements inutiles et les longues attentes ! Avec CitoyenConnect, tout se fait en quelques clics.</p>
                        </div>
                        <div className="second-part">
                            <img className="w-card" src={cnie} alt="cni image" />
                        </div>
                    </div>
                    <div className="links flex justify-center space-x-6 items-center py-4">
                        <Link to = '/demande-inscription'><button className="text-[#ffffff] bg-[#336C4E] rounded-xl px-3 py-2">Demande D'inscription</button></Link>
                    </div>
                </div>
            </div>
            <div className="second-section pb-14 bg-[#336C4E] text-[#ffffff] flex flex-wrap-reverse justify-evenly items-center">
                <div className="first-part">
                    <h1 className="text-5xl font-semibold py-10">Services Proposés</h1>
                    <ul className="services text-lg w-custom space-y-5">
                        <li><span className="font-semibold">1 - Demande de Documents Administratifs</span><p>Obtenez rapidement les documents requis tels qu'un extrait d'acte de naissance, une attestation de résidence, et bien d'autres encore.</p></li>
                        <li><span className="font-semibold">2 - Légalisation de Documents </span><p>Simplifiez le processus de légalisation de vos documents en les soumettant électroniquement. Gagnez en efficacité et recevez vos documents légalisés sans complications.</p></li>
                        <li><span className="font-semibold">3 - Signature Électronique </span><p>Apposez votre signature électronique en toute sécurité. Économisez du temps et garantissez la validité juridique de vos transactions.</p></li>
                    </ul>
                </div>
                <div className="second-part">
                    <img className="w-96 h-80" src={map} alt="" />
                </div>
            </div>
            <div className="third-section flex flex-col items-center pb-12">
                    <h1 className="text-5xl text-[#336C4E] font-semibold py-10">Étapes à Suivre</h1>
                    <ul className="services text-lg list-disc space-y-5">
                        <li><p>Cliquez sur "Demande d'Inscription" pour commencer le processus.</p></li>
                        <li><p>Remplissez les champs tels que le numéro de carte d'identité nationale (CIN), le nom, le prénom, l'adresse etc</p></li>
                        <li><p>Votre demande sera traitée, et vous serez informé de l'avancement du processus.</p></li>
                        <li><p>Vous recevrez un code spécial via un lien envoyé à votre adresse e-mail.</p></li>
                        <li><p>Utilisez le code reçu pour confirmer votre inscription officielle sur notre plateforme.</p></li>
                    </ul>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home