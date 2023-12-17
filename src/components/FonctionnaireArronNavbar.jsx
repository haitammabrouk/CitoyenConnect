import { useState } from 'react';
import logo from '../assets/logo.png'
import '../styles/citoyennavbar.css'
import '../styles/fonctionnairearrondnavbar.css'

function CitoyenNavbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className='w-full font-cairo pb-3 border-b-2 border-b-[#4d4d58]'>
        <aside id='sidebar' className={isSidebarOpen ? 'show' : '' }>
        <div className='sidebar_content sidebar_body'>
          <nav className='side_navlinks'>
            <ul className='flex items-center'>
              <li>
                <a href='#'  className='flex items-center'> <span className='pl-4 pr-2'></span><p className='text-sm pl-3'>Accueil</p>   </a >
              </li>
              <li>
                <a href='#' className='flex items-center' > <span className='pl-4 pr-2' ></span> <p className='text-sm pl-3'><span className='pr-1'>Demandes</span> D'inscription</p>  </a >
              </li>
              <li>
                <a href='#' className='flex items-center' > <span className='pl-4 pr-2'></span> <p className='text-sm pl-3'>Demandes D'egalisation</p> </a>
              </li>
              <li>
                <a href='#' className='flex items-center' > <span className='pl-4 pr-2'></span><p className='text-sm pl-3'> Demandes de Signature</p> </a>
              </li>
              <li>
                <a href='#' className='flex items-center' > <span className='pl-5 pr-2'></span><p className='text-sm pl-3'> Actes De Naissance</p> </a>
              </li>
              <li>
                <a href='#' className='flex items-center' > <span className='pl-5 pr-2'></span><p className='text-sm pl-3'> Reclamations</p> </a>
              </li>
              <li>
                <a href='#' className='flex items-center' > <span className='pl-5 pr-2'></span><p className='text-sm pl-3'> Votre Profil</p> </a>
              </li>
              <li>
                <a href='#' className='flex items-center'><span className='pl-5 pr-2'></span><p className='text-sm pl-3'>Deconnexion</p></a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
        <div className="upper flex justify-around items-center ">
            <div className="logo w-72 ">
                <img src={logo} alt="" />
            </div>
            <div className='text-2xl text-center '>
                <h1>
                    Plateforme Numerique de Gestion des Documents Administratives
                </h1>
                <h1 className='font-bold'>Citoyen Connect</h1>
            </div>
            <div  className={`sidebar_toggler ${isSidebarOpen ? 'active' : '' }`} onClick={toggleSidebar}>
                <span className='text-[#2f4e62]'></span>
                <span className='text-[#2f4e62]'></span>
                <span className='text-[#2f4e62]'></span>
            </div>
        </div>
    </div>
  )
}

export default CitoyenNavbar