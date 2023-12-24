import { Link } from 'react-router-dom'
import '../styles/citoyenhome.css'

function UtilisateurOptions() {
  return (
    <div className="container">
                                <nav>
                                    <ul className="mcd-menu">
                                        <li>
                                            <Link to='/honneur-citoyen'>
                                                <i className="fa fa-gift"></i>
                                                <strong>Declaration D'honneur</strong>
                                         
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/celibat-citoyen'>
                                                <i className="fa fa-globe"></i>
                                                <strong>Declaration Celibat</strong>
                                               
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
  )
}

export default UtilisateurOptions