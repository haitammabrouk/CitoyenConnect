import { useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import axios from "axios";
import CreationMdp from "./CreationMdp";
import { useSession } from "../../SessionContext";

function InscriptionFinale() {

    const [cin, setCin] = useState('');
    const [code, setCode] = useState('');

    const [check, setCheck] = useState(false);
    const [checkError, setCheckError] = useState(false);

    const { setSessionId } = useSession();

    const handleCinChange = (e) => {
        setCin(e.target.value);
    }

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/inscription-finale", null, {
        params: {
            cin: cin,
            code : code
        }
        })
        .then((response) => {
            console.log("success");
            setCheck(true);
            setCheckError(false);
            setSessionId(cin);
            
        }).catch((error) => {
            setCheck(false);
            setCheckError(true);
        })
    }

  return ( check ? <CreationMdp /> :
  (
    <div className="w-full font-cairo">
        <Navbar />
        <div className="page-content font-cairo flex justify-center mt-10">
            <div className="form w-5/12 shadow-xl rounded-sm mb-20">
                <h1 className="text-center text-3xl font-semibold text-[#336C4E] py-8">Inscription Finale</h1>
                <p className="text-sm font-semibold  pb-4 mx-10">Connectez-vous à votre espace utilisateur avec le code que vous avez reçu dans votre e-mail</p>
                <p className="text-sm font-bold text-md text-[#424141]  border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                
                <form onSubmit={handleSubmit} className="pt-8" action="" method="post">
                    <div className="parts flex flex-wrap justify-around">
                        <div className="first-part space-y-6">
                            <div className="cin">
                                <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                <input value={cin} onChange={handleCinChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin" name="cin" required />
                            </div>
                            <div className="code">
                                <label className="text-xs font-semibold block pb-3" htmlFor="code">Code confidentiel <span className="text-[#FF0000]">*</span></label>
                                <input value={code} onChange={handleCodeChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="code" name="code" />
                            </div>
                        </div>
                    </div>
                {
                    checkError && (
                        <div className=''>
                            <p className=' pt-2 text-[#894646] font-bold text-center text-sm'> Le CIN et le code sont invalides</p>
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
    </div>
    )
  )
}

export default InscriptionFinale