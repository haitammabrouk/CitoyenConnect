import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <div className="navbar w-full">
        <div className="upper flex items-center flex-wrap ">
            <div className="logo w-80 pl-5">
                <img src={logo} alt="" />
            </div>
            <div className='text-2xl text-center font-serif '>
                <h1>
                    Plateforme Numerique de Gestion des Documents Administratives
                </h1>
                <h1 className='font-semibold'>Citoyen Connect</h1>
            </div>
            <div className="content">
                
            </div>
        </div>
        <div className="lower pt-3">
            <ul className='links bg-[#d59d32] font-serif flex justify-evenly text-[#ffffff] py-1'>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Informations Pratiques</a></li>
            </ul>
        </div>
    </div>
  )
}
