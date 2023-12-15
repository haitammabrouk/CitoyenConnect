import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function Login() {
  return (
    <div className="w-full font-cairo">
        <Navbar />
            <div className="page-content font-cairo flex justify-center mt-10">
                <div className="form w-5/12 shadow-xl rounded-sm mb-20">
                    <h1 className="text-center text-3xl font-semibold text-[#336C4E] py-8">Authentification</h1>
                    <p className="text-sm font-semibold  pb-4 mx-10">Veuillez saisir votre CIN et nouveau mot de passe. Merci de suivre ces étapes pour assurer la sécurité de votre compte. Nous vous remercions de votre confiance.</p>
                    <p className="text-sm font-semibold   border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                    <form className="pt-8" action="" method="post">
                        <div className="parts flex flex-wrap justify-around">
                            <div className="first-part space-y-6">
                                <div className="cin">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                    <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="password" id="cin" name="cin" required />
                                </div>
                                <div className="pwd pb-3">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="pwd">Mot de passe <span className="text-[#FF0000]">*</span></label>
                                    <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="password" id="pwd" name="pwd" />
                                </div>
                                <a href="#" className="text-[#4A4D49] text-sm">Mot de passe oublié ?</a>
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

export default Login