import Footer from '../components/Footer'
import CitoyenNavbar from '../components/CitoyenNavbar'
import CitoyenOptions from '../components/CitoyenOptions'

function CitoyenHome() {
  return (
    <div className='w-full font-cairo'>
        <CitoyenNavbar />
        <div className="page-content min-h-screen">
            <div className="sections-content flex justify-evenly pt-6">
                <div className="first-section w-8/12 mb-20 ">
                    <div className="first-section-content px-5">
                        <h1 className="text-2xl font-semibold text-[#336C4E] pb-2 pt-6 border-b border-b-[#696969]">Bienvenue sur CitoyenConnect - Votre Portail Officiel du Service Public</h1>
                        <div className="bienvenue text-[#6e6b6b] text-lg space-y-3 py-6 border-b border-b-[#696969]">
                            <p>C'est avec <span className='font-bold'>grand plaisir</span> que nous vous accueillons sur 
                                notre plateforme dédiée à simplifier vos interactions
                                administratives.</p>
                            <p>En tant que citoyen engagé, 
                                CitoyenConnect, vous avez accès à des 
                                services gouvernementaux sécurisés et efficaces.
                                Explorez nos fonctionnalités conçues pour faciliter 
                                vos démarches administratives.
                            </p>
                            <p>
                                Merci de votre confiance en CitoyenConnect 
                                pour vos besoins administratifs. Nous sommes là 
                                pour vous offrir un service public de qualité.</p>
                        </div>
                        <div className="lois text-[#007ad9] text-lg space-y-3 py-6 border-b border-b-[#696969]">
                            <p className='text-[#6e6b6b]'>
                            En utilisant CitoyenConnect, vous vous engagez à respecter 
                            les lois et règlements en vigueur. Voici quelques-unes des lois
                             pertinentes pour l'utilisation de notre plateforme :
                            </p>
                            <p>
                                1 - Loi sur la Protection des Données 
                                Personnelles : Nous nous conformons strictement 
                                aux lois sur la protection des données 
                                personnelles pour assurer la confidentialité 
                                et la sécurité de vos informations.
                            </p>
                            <p>
                            2 - Réglementation sur la Signature Électronique 
                            : Les signatures électroniques effectuées sur notre
                             plateforme sont légalement reconnues conformément 
                             à la réglementation en vigueur.
                            </p>
                            <p>
                            3 - Normes de Sécurité Informatique : Nous appliquons 
                            des normes de sécurité informatique rigoureuses pour 
                            protéger les données des utilisateurs contre tout 
                            accès non autorisé.
                            </p>
                            <p>
                            4 - Lois sur l'Accès à l'Information : Nous nous 
                            engageons à faciliter l'accès à l'information 
                            conformément aux lois et réglementations en vigueur.
                            </p>
                        </div>
                        <div className="assistance py-6 text-lg text-[#6e6b6b]">
                            <p>Si vous avez besoin d'une assistance personnalisée 
                                ou si vous rencontrez des difficultés, veuillez 
                                remplir le formulaire de réclamation ci-dessous. 
                                Notre équipe d'assistance examinera votre demande
                                 et fera tout son possible pour résoudre votre 
                                 problème dans les plus brefs délais.</p>
                        </div>
                    </div>
                </div>
                <div className="second-section">
                    <div className="card-services rounded-sm shadow-xl pt-8">
                        <div className="second-section">
                            <div className="second-section-content">
                                <CitoyenOptions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CitoyenHome