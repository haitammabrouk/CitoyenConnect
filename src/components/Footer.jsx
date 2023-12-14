import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import royaume from '../assets/emblem.jpg'
import { faAddressCard, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="w-full font-cairo text-[#ffffff] bg-[#336C4E]">
        <div className="flex flex-col">
            <div className="first-content content flex justify-evenly flex-wrap pb-4">
                <div className="first-part pt-6">
                    <h3 className='text-lg'><span className='pr-3'><FontAwesomeIcon icon={faCircleInfo} /></span><span>Informations pratiques</span></h3>
                    <ul className='space-y-1 pt-3'>
                        <li><a href="#">A propos de CitoyenConnect</a></li>
                        <li><a href="#">A qui s'adresser ?</a></li>
                        <li><a href="#">Aide</a></li>
                    </ul>
                </div>
                <div className="second-part pt-6">
                    <h3 className='text-lg'><span className='pr-3'><FontAwesomeIcon icon={faAddressCard} /></span><span>Demander D'inscrire</span></h3>
                    <ul className='space-y-1 pt-3'>
                        <li><a href="#">Créer votre Compte</a></li>
                        <li><a href="#">Suivre ou compléter votre demande</a></li>
                    </ul>
                </div>
                <div className="third-part pt-6">
                    <img className='w-64' src={royaume} alt="royaume marocaine" />
                </div>
            </div>
            <div className="second-content border-t border-t-[#ffffff] mx-32 py-4">
                <p className='text-center'>Copyright © 2023 .Tous droits réservés.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer