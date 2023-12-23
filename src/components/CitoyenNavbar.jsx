import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/citoyennavbar.css'
import { faCircleQuestion, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSession } from '../../SessionContext'
import { useEffect, useState } from 'react'
import axios from 'axios'

function CitoyenNavbar() {

    const {sessionId} = useSession();


    const [citoyen, setCitoyen] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8080/citoyen/${sessionId}`)
        .then((response) => {
            setCitoyen(response.data);
        }).catch((error) => {
            console.log("error fetching citoyen informations ", error);
        });
    });

  return (
    <div className='w-full font-cairo'>
        <div className="upper flex items-center flex-wrap ">
            <div className="logo w-80 pl-5">
                <img src={logo} alt="" />
            </div>
            <div className='text-2xl text-center '>
                <h1>
                    Plateforme Numerique de Gestion des Documents Administratives
                </h1>
                <h1 className='font-bold'>Citoyen Connect</h1>
            </div>
        </div>
        <div className="lower pt-3">
            <ul className='links bg-[#336C4E] flex justify-evenly text-[#ffffff] py-1'>
                <li><Link to='/citoyen-home'><span className='pr-2'><FontAwesomeIcon icon={faHouse} /></span><span>Accueil</span></Link></li>
                <li><Link to='/citoyen-reclamations'><span className='pr-2'><FontAwesomeIcon icon={faCircleQuestion} /></span><span>Reclamations</span></Link></li>
                <li className='dropdown'>
                    <a className='dropbtn' href="#"><span className='pr-2'><FontAwesomeIcon icon={faUser} /></span>
                        {
                            citoyen && (
                                <span>{citoyen.nom} {citoyen.prenom} </span>
                            )
                        }
                        </a>
                    <div className="dropdown-content">
                        <Link to='/citoyen-profile'>Consulter votre profil</Link>
                        <a href="#">Vos Demandes</a>
                        <a href="#">Deconnexion</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CitoyenNavbar