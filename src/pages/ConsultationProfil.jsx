import React from 'react'
import CitoyenNavbar from '../components/CitoyenNavbar'

function ConsultationProfil() {
  return (
    <div className="w-full">
        <CitoyenNavbar />
        <div className="page-content font-cairo flex justify-center mt-10">
            <div className="form w-9/12 shadow-xl rounded-sm">
                <h1 className="text-center text-3xl font-semibold text-[#336C4E] py-5">Informations Personnelles</h1>
                <p className="text-sm font-semibold  pt-5 border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                <form className="pt-4" action="" method="post">
                    <div className="parts flex flex-wrap justify-around items-baseline">
                        <div className="first-part space-y-6">
                            <div className="cin">
                                <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin" name="cin" disabled />
                            </div>
                            <div className="nom">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nom">Nom <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom" name="nom" disabled />
                            </div>
                            <div className="prenom">
                                <label className="text-xs font-semibold block pb-3" htmlFor="prenom">Prenom <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom" name="prenom" disabled />
                            </div>
                            <div className="date">
                                <label className="text-xs font-semibold block pb-3" htmlFor="date">Date de naisance <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] pr-2 h-12 w-96 pl-2 rounded-3xl outline-none" type="date" id="date" name="date" disabled />
                            </div>
                            <div className="lieu">
                                <label className="text-xs font-semibold block pb-3" htmlFor="lieu">Lieu de naissance <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="lieu" name="lieu" disabled />
                            </div>
                            <div className="nationalite">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nationalite">Nationalite <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nationalite" name="nationalite" disabled />
                            </div>
                            <div className="situation">
                                <label className="text-xs font-semibold block pb-3" htmlFor="situation">Situation familiale <span className="text-[#FF0000]">*</span></label>
                                <select className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" id="situation" name="situation" disabled>
                                    <option value="celibataire">Célibataire</option>
                                    <option value="marie">Marié</option>
                                </select>
                            </div>

                            <div className="sexe">
                                <label htmlFor="sexe" className="text-xs font-semibold pb-3">Sexe <span className="text-[#FF0000]">*</span></label>
                                <div className="flex space-x-8">
                                    <div className="male">
                                        <input id="male" type="radio" name="sexe" />
                                        <label className="text-sm text-[#676867] pl-2" htmlFor="male">Masculin</label>
                                    </div>
                                    <div className="female">
                                        <input id="female" type="radio" name="sexe" />
                                        <label className="text-sm text-[#676867] pl-2" htmlFor="female">Féminin</label>
                                    </div>
                                </div>
            
                            </div>
                            
                        </div>
                        <div className="second-part space-y-6 py-12">
                            <div className="email">
                                <label className="text-xs font-semibold block pb-3" htmlFor="email">Email <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="email" name="email" disabled />
                            </div>
                            <div className="pwd">
                                <label className="text-xs font-semibold block pb-3" htmlFor="pwd">Mot de passe <span className="text-[#FF0000]">*</span></label>
                                <input className="border block border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="pwd" name="pwd" disabled />
                                <a href="#" className='text-[#007ad9] text-xs underline'>Modifier le mot de passe</a>
                            </div>
                            <div className="nom_pere">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nom_pere">Nom du père <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom_pere" name="nom_pere" disabled />
                            </div>
                            <div className="prenom_pere">
                                <label className="text-xs font-semibold block pb-3" htmlFor="prenom_pere">Prenom du père <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom_pere" name="nom_pere" disabled />
                            </div>
                            <div className="nom_mere">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nom_mere">Nom de la mère <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom_mere" name="nom_mere" disabled />
                            </div>
                            <div className="prenom_mere">
                                <label className="text-xs font-semibold block pb-3" htmlFor="prenom_mere">Prenom de la mère <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] pb-3 h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom_mere" name="prenom_mere" disabled />
                            </div>
                            <div className="image">
                                <label className="text-xs font-semibold block pb-3" htmlFor="image">Image personelle <span className="text-[#FF0000]">*</span></label>
                                <input type="file" id="image" name="image" />
                            </div>
                            <div className="carte_national">
                                <label className="text-xs font-semibold block pb-3" htmlFor="carte_national">Carte nationale (scanné) <span className="text-[#FF0000]">*</span></label>
                                <input type="file" id="carte_national" name="carte_national" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConsultationProfil