import logo from '../assets/logo.png'
import '../styles/citoyennavbar.css'

function CitoyenNavbar() {
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
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Informations Pratiques</a></li>
                <li className='dropdown'>
                    <a className='dropbtn' href="#">Connexion</a>
                    <div className="dropdown-content">
                        <a href="#">Consulter votre profil</a>
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