import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FonctionnaireArronNavbar from '../components/FonctionnaireArronNavbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSession } from '../../SessionContext';
import Login from './Login';

function FonctionnaireDemandeInscDetails() {

    const [inscription, setInscription] = useState();

    const { sessionId } = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }


    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/inscription/${id}`)
        .then((response) => {
            setInscription(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log("error fetching inscription informations ", error);
        });
    }, [id]);

  return (
    checkId(sessionId) ? <Login /> : (
        <div className="w-full">
            <FonctionnaireArronNavbar />
            <div className="page-content font-cairo flex justify-center mt-10">
                <div className="form w-9/12 shadow-xl rounded-sm pb-10">
                    <h1 className="text-center text-3xl font-semibold text-[#336C4E] ">Demande D'inscription</h1>
                    <p className="text-sm font-semibold  pt-5 border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                    {
                        inscription && (
                            <form  className="pt-8" action="" method="post">
                        <div className="parts flex flex-wrap justify-around">
                            <div className="first-part space-y-6">
                                <div className="cin">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.cin} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin" name="cin" disabled />
                                </div>
                                <div className="nom">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nom">Nom <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.nom} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom" name="nom" disabled />
                                </div>
                                <div className="prenom">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="prenom">Prenom <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.prenom} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom" name="prenom" disabled />
                                </div>
                                <div className="phone">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="phone">Nº Telephone  <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.phone} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="phone" name="phone" disabled />
                                </div>
                                <div className="email">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="email">Email <span className="text-[#FF0000]">*</span></label>
                                    <input  value={inscription.email} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="email" name="email" disabled />
                                </div>
                                <div className="date">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="date">Date de naisance <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.date} className="border border-[#B0B0B0] pr-2 h-12 w-96 pl-2 rounded-3xl outline-none" type="date" id="date" name="date" disabled />
                                </div>
                                <div className="lieu">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="lieu">Lieu de naissance <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.lieuNaissance}  className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="lieu" name="lieu" disabled />
                                </div>
                                <div className="nationalite">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nationalite">Nationalite <span className="text-[#FF0000]">*</span></label>
                                    <input  value={inscription.nationalite} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nationalite" name="nationalite" disabled />
                                </div>
                                <div className="situation">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="situation">Situation Familiale <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.situationFamiliale} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="situation" name="situation" disabled />
                                </div>
                                <div className="sexe">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="sexe">Sexe <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.sexe} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="sexe" name="sexe" disabled />
                                </div>
                                
                            </div>
                            <div className="second-part space-y-6">
                                <div className="cin_pere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin_pere">CIN du père <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.cin_pere} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin_pere" name="cin_pere" disabled />
                                </div>
                                <div className="nom_pere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nom_pere">Nom du père <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.nom_pere}  className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom_pere" name="nom_pere" disabled />
                                </div>
                                <div className="prenom_pere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="prenom_pere">Prenom du père <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.prenom_pere} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom_pere" name="nom_pere" disabled />
                                </div>
                                <div className="cin_mere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin_mere">CIN du mère <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.cin_mere} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin_mere" name="cin_mere" disabled />
                                </div>
                                <div className="nom_mere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nom_mere">Nom de la mère <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.nom_mere} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom_mere" name="nom_mere" disabled />
                                </div>
                                <div className="prenom_mere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="prenom_mere">Prenom de la mère <span className="text-[#FF0000]">*</span></label>
                                    <input value={inscription.prenom_mere}  className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom_mere" name="prenom_mere" disabled />
                                </div>
                                <div className="image">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="image">Image personelle <span className="text-[#FF0000]">*</span></label>
                                    <input type="file"  id="image" name="image" />
                                </div>
                                <div className="carte_national">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="carte_national">Carte nationale (scanné) <span className="text-[#FF0000]">*</span></label>
                                    <input type="file" id="carte_national" name="carte_national" />
                                </div>
                            </div>
                        </div>
                    </form>
                        )
                    }
                </div>
            </div>
        </div>
    )
  )
}

export default FonctionnaireDemandeInscDetails