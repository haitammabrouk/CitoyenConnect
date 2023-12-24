import React from 'react'
import FonctionnaireArronNavbar from '../components/FonctionnaireArronNavbar'
import StatCard from '../components/StatCard'
import { useSession } from '../../SessionContext';
import Login from './Login';

function FonctionnaireArronHome() {

    const { sessionId } = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

  return (
    checkId(sessionId) ? <Login /> : (
        <div className='w-full font-cairo'>
        <FonctionnaireArronNavbar />
        <div className="page min-h-screen flex justify-center px-6 pt-6">
            <div className="page-content bg-[#f2f5f3] px-10 py-10">
                <div className="welcome">
                    <h1 className='text-3xl font-semibold'>Bienvenue Haitam Mabrouk</h1>
                </div>
                <div className="page-description pt-3 pr-8 pb-8">
                    Cele Dashboard vous fournit un aperçu complet de l'activité
                     administrative en temps réel. Suivez le statut des 
                     demandes, identifiez les tendances, et prenez des 
                     décisions éclairées pour optimiser l'efficacité 
                     opérationnelle. Explorez les statistiques clés pour une 
                     gestion proactive et transparente des demandes des 
                     citoyens.
                </div>
                <div className="content flex justify-between">
                    <div className="first-part">
                        graphe(les demandes le plus frequentes)
                    </div>
                    <div className="second-part">
                        <StatCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  )
}

export default FonctionnaireArronHome