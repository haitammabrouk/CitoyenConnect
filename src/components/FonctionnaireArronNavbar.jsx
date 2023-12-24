import { useState } from 'react';
import logo from '../assets/logo.png'
import '../styles/citoyennavbar.css'
import '../styles/fonctionnairearrondnavbar.css'
import { Link } from 'react-router-dom';
import { useSession } from '../../SessionContext';

function CitoyenNavbar() {

  const {sessionId} = useSession();

  const setIdNull = (id) => {
    id = null;
    window.location.reload();
  }

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
                <Link to='/fonctionnaire-demandes-inscription' className='flex items-center' > <span className='pl-4 pr-2' ></span> <p className='text-sm pl-3'><span className='pr-1'>Demandes</span> D'inscription</p>  </Link >
              </li>
              <li>
                <Link to='/admin-demandes-egalisation' className='flex items-center' > <span className='pl-4 pr-2'></span> <p className='text-sm pl-3'>Demandes D'égalisation</p> </Link>
              </li>
              <li>
                <Link to='/admin-demandes-conformite' className='flex items-center' > <span className='pl-4 pr-2'></span><p className='text-sm pl-3'> Demandes de Conformité</p> </Link>
              </li>
              <li>
                <Link to='/fonctionnaire-reclamations' className='flex items-center' > <span className='pl-5 pr-2'></span><p className='text-sm pl-3'> Reclamations</p> </Link>
              </li>
              <li>
                <Link to = '/admin-profile' className='flex items-center' > <span className='pl-5 pr-2'></span><p className='text-sm pl-3'> Votre Profil</p> </Link>
              </li>
              <li>
                <Link to='/login' onClick={() => setIdNull(sessionId)} className='flex items-center'><span className='pl-5 pr-2'></span><p className='text-sm pl-3'>Deconnexion</p></Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
        <div className="upper flex justify-around items-center ">
          <Link to='/admin-home'>
            <div className="logo w-72 ">
                <img src={logo} alt="" />
            </div>
          </Link>

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