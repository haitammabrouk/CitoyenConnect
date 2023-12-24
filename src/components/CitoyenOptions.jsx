import { Link } from 'react-router-dom'
import '../styles/citoyenhome.css'

function CitoyenOptions() {
  return (
    <div className="container">
                                <nav>
                                    <ul className="mcd-menu">
                                        <li>
                                            <Link to='/citoyen-signature'>
                                                <i className="fa fa-home"></i>
                                                <strong>Demande de Conformité</strong>
                                               
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/citoyen-egalisation'>
                                                <i className="fa fa-edit"></i>
                                                <strong>Demande d'égalisation</strong>
                                              
                                            </Link>
                                        </li>
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
                                        <li>
                                            <a href="">
                                                <i className="fa fa-picture-o"></i>
                                                <strong>Reclamations</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
  )
}

export default CitoyenOptions