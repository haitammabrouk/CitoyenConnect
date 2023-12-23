import { useState } from "react";
import { useSession } from "../../SessionContext";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Login from '../pages/Login'
import axios from "axios";
import { useLocation } from "react-router";

function ResetMdp() {

    const [mdp, setMdp] = useState('');
    const [mdpv, setMdpv] = useState('');
    const [check, setCheck] = useState(false);
    const [checkError, setCheckError] = useState(false);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    const handleMdpChange = (e) => {
        setMdp(e.target.value);
    }

    const handleMdpvChange = (e) => {
        setMdpv(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/reseting", null, {
        params: {
            mdp: mdp,
            mdpv : mdpv,
            token : token
        }
        })
        .then((response) => {
            console.log("success");
            setCheck(true);
            setCheckError(false);
            
        }).catch((error) => {
            setCheck(false);
            setCheckError(true);
        })
    }

  return (
    <div className="w-full font-cairo">
        <Navbar />
            <div className="page-content font-cairo flex justify-center mt-10">
                <div className="form w-5/12 shadow-xl rounded-sm mb-20">
                    <h1 className="text-center text-3xl font-semibold text-[#336C4E] py-8">Nouveau Mot de Passe</h1>
                    <p className="text-sm font-semibold  pb-4 mx-10">Veuillez saisir votre nouveau mot de passe. Merci de suivre ces étapes pour assurer la sécurité de votre compte. Nous vous remercions de votre confiance.</p>
                    <p className="text-sm font-semibold   border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                    <form onSubmit={handleSubmit} className="pt-8" action="" method="post">
                        <div className="parts flex flex-wrap justify-around">
                            <div className="first-part space-y-6">
                                <div className="pwd">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin">Nouveau mot de passe <span className="text-[#FF0000]">*</span></label>
                                    <input value={mdp} onChange={handleMdpChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="password" id="pwd" name="pwd" required />
                                </div>
                                <div className="pdwc">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="pwdc">Confirmer le mot de passe <span className="text-[#FF0000]">*</span></label>
                                    <input value={mdpv} onChange={handleMdpvChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="password" id="pwc" name="pwc" />
                                </div>
                            </div>
                        </div>
                        {
                    check && (
                        <div >
                            <p className=' pt-2 text-center font-bold text-[#4a7846] text-sm'>Mot de passe est modifie avec succes</p>
                        </div>
                    )
                }
                {
                    checkError && (
                        <div>
                            <p className=' pt-2 text-center font-bold text-[#894646] text-sm'> Le lien de recuperation a ete expire</p>
                        </div>
                    )
                }
                        <div className="btn flex justify-center py-6">
                            <input type="submit" value="Valider" className="bg-[#336C4E] text-[#ffffff] rounded-xl px-10 py-2" />
                        </div>
                    </form>
                </div>
            </div>
        <Footer />
    </div>)

}

export default ResetMdp