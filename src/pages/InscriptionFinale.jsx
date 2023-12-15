import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function InscriptionFinale() {
  return (
    <div className="w-full font-cairo">
        <Navbar />
        <div className="page-content font-cairo flex justify-center mt-10">
            <div className="form w-5/12 shadow-xl rounded-sm mb-20">
                <h1 className="text-center text-3xl font-semibold text-[#336C4E] py-8">Inscription Finale</h1>
                <p className="text-sm font-semibold  pb-4 mx-10">Connectez-vous à votre espace utilisateur avec le code que vous avez reçu dans votre e-mail</p>
                <p className="text-sm font-semibold   border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                <form className="pt-8" action="" method="post">
                    <div className="parts flex flex-wrap justify-around">
                        <div className="first-part space-y-6">
                            <div className="cin">
                                <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin" name="cin" required />
                            </div>
                            <div className="nationalite">
                                <label className="text-xs font-semibold block pb-3" htmlFor="code">Code de vérification <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="code" name="code" />
                            </div>
                        </div>
                    </div>
                    <div className="btn flex justify-center py-12">
                        <input type="submit" value="Valider" className="bg-[#336C4E] text-[#ffffff] rounded-xl px-10 py-2" />
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default InscriptionFinale