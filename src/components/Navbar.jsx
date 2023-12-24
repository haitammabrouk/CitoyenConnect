import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import { faCircleQuestion, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className="w-full font-cairo">
        <div className="upper flex items-center flex-wrap ">
            <div className="logo w-80 pl-5">
                <Link to='/'><img src={logo} alt="" /></Link>
                
            </div>
            <div className='text-2xl text-center '>
                <h1>
                    Plateforme Numerique de Gestion des Documents Administratives
                </h1>
                <h1 className='font-bold'>Citoyen Connect</h1>
            </div>
            <div className="content">
                
            </div>
        </div>
        <div className="lower pt-3">
            <ul className='links bg-[#336C4E] flex justify-evenly text-[#ffffff] py-1'>
                <li><Link to='/'><span className='pr-2'><FontAwesomeIcon icon={faHouse} /></span><span>Accueil</span></Link></li>
                <li><Link to = '/reclamations'><span className='pr-2'><FontAwesomeIcon icon={faCircleQuestion} /></span><span>Réclamations</span></Link></li>
                <li><Link to = '/login'><span className='pr-2'><FontAwesomeIcon icon={faUser} /></span><span>Connexion</span></Link></li>
            </ul>
        </div>
    </div>
  )
}
