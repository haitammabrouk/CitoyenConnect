import CitoyenNavbar from "../components/CitoyenNavbar"
import CitoyenOptions from "../components/CitoyenOptions"
import Footer from "../components/Footer"


function Reclamation() {
  return (
    <div className="w-full font-cairo">
        <CitoyenNavbar />
        <div className="page-content min-h-screen">
            <div className="sections-content flex justify-evenly pt-6">
                <div className="first-section w-8/12 mb-20 ">
                <h1 className="text-2xl font-semibold text-[#336C4E] pb-2 pt-6 border-b border-b-[#B0B0B0]">Reclamation et Assistance</h1>
                <p className="text-sm font-semibold  pt-6 mx-4"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                <form className="pt-8" action="" method="post">
                    <div className="parts flex flex-wrap justify-around">
                        <div className="first-part space-y-6">
                            <div className="nom">
                                <label className="text-xs font-semibold block pb-3" htmlFor="nom">Nom <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom" name="nom" />
                            </div>
                            <div className="message">
                                <label className="text-xs font-semibold block pb-3" htmlFor="message">Message <span className="text-[#FF0000]">*</span></label>
                                <textarea name="message" id="message" cols="30" rows="10" className="border border-[#B0B0B0] h-36 w-96 px-4 py-2 rounded-3xl outline-none"></textarea>
                            </div>
                        </div>
                        <div className="second-part space-y-6">
                            <div className="email">
                                <label className="text-xs font-semibold block pb-3" htmlFor="email">Email <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="email" id="email" name="email" />
                            </div>
                        </div>
                    </div>
                    <div className="btn flex justify-start py-8 pl-10">
                        <input type="submit" value="Valider" className="bg-[#336C4E] text-[#ffffff] rounded-xl px-10 py-2" />
                    </div>
                </form>
                </div>
                <div className="second-section">
                    <div className="card-services rounded-sm shadow-xl pt-8">
                        <div className="second-section">
                            <div className="second-section-content">
                                <CitoyenOptions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Reclamation