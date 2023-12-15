import Navbar from "../components/Navbar"


function DemandeInscription() {
  return (
    <div className="w-full">
        <Navbar />
        <div className="page-content font-cairo flex justify-center mt-10">
            <div className="form w-9/12 shadow-xl rounded-sm">
                <h1 className="text-center text-3xl font-semibold text-[#336C4E] py-5">Demande D'inscription</h1>
                <p className="text-sm font-semibold  pt-8 border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                <form className="pt-8" action="" method="post">
                    <div className="parts flex flex-wrap justify-around">
                        <div className="first-part space-y-6">
                            
                            <div className="nom">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nom">Nom <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom" name="nom" required />
                            </div>
                            <div className="prenom">
                                <label className="text-xs font-semibold block pb-3" htmlFor="prenom">Prenom <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom" name="prenom" required />
                            </div>
                            <div className="date">
                                <label className="text-xs font-semibold block pb-3" htmlFor="date">Date de naisance <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] pr-2 h-12 w-96 pl-2 rounded-3xl outline-none" type="date" id="date" name="date" required />
                            </div>
                            <div className="lieu">
                                <label className="text-xs font-semibold block pb-3" htmlFor="lieu">Lieu de naissance <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="lieu" name="lieu" required />
                            </div>
                            <div className="nationalite">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nationalite">Nationalite <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nationalite" name="nationalite" />
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
                        <div className="second-part space-y-6">
                            <div className="nom_pere">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nom_pere">Nom du père <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom_pere" name="nom_pere" />
                            </div>
                            <div className="prenom_pere">
                                <label className="text-xs font-semibold block pb-3" htmlFor="prenom_pere">Prenom du père <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom_pere" name="nom_pere" />
                            </div>
                            <div className="nom_mere">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nom_mere">Nom de la mère <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom_mere" name="nom_mere" />
                            </div>
                            <div className="prenom_mere">
                                <label className="text-xs font-semibold block pb-3" htmlFor="prenom_mere">Prenom de la mère <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] pb-3 h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom_mere" name="prenom_mere" />
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
                    <div className="btn flex justify-center py-12">
                        <input type="submit" value="Valider" className="bg-[#336C4E] text-[#ffffff] rounded-xl px-10 py-2" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default DemandeInscription