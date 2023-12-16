import React from 'react'
import Footer from '../components/Footer'
import CitoyenOptions from '../components/CitoyenOptions'
import CitoyenNavbar from '../components/CitoyenNavbar'

function DeclarationDeces() {
  return (
    <div className='w-full font-cairo'>
        <CitoyenNavbar />
        <div className="page-content min-h-screen">
            <div className="sections-content flex justify-evenly pt-6">
                <div className="first-section w-8/12 mb-20 ">
                <h1 className="text-2xl font-semibold text-[#336C4E] pb-2 pt-6 border-b border-b-[#B0B0B0]">Declaration de Décès</h1>
                <p className="text-sm font-semibold  pt-6 mx-4"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                <form className="pt-8" action="" method="post">
                    <div className="parts flex flex-wrap justify-around">
                        <div className="first-part space-y-6">
                            <div className="cin">
                                <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin" name="cin" />
                            </div>
                            <div className="nom">
                                <label className="text-xs font-semibold block pb-3" htmlFor="cin">Nom de la personne décédée <span className="text-[#FF0000]">*</span></label>
                                <input className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom" name="nom" />
                            </div>
                            
                            
                        </div>
                        <div className="second-part space-y-6">
                            <div className="carte_national">
                                <label className="text-xs font-semibold block pb-3" htmlFor="carte_national">Carte nationale (scanné) <span className="text-[#FF0000]">*</span></label>
                                <input type="file" id="carte_national" name="carte_national" />
                            </div>
                            <div className="image">
                                <label className="text-xs font-semibold block pb-3" htmlFor="image">Image personelle <span className="text-[#FF0000]">*</span></label>
                                <input type="file" id="image" name="image" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="btn flex justify-start py-8 pl-5">
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

export default DeclarationDeces