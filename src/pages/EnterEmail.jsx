import { useNavigate } from "react-router";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useState } from "react";
import axios from "axios";


function EnterEmail() {

    const [cin, setCin] = useState('');
    const [check, setCheck] = useState(false);

    let navigate = useNavigate()

    const hanldeCinChange = (e) => {
        setCin(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/reset", null, {
        params: {
            cin: cin
        }
        })
        .then((response) => {
            console.log("success");
            navigate("/email-sent");
            
        }).catch((error) => {
            console.log("error");
            setCheck(true);
        })
    }

  return (
    <div className="w-full font-cairo">
        <Navbar />
        <div className="page-content font-cairo flex justify-center mt-10">
                <div className="form w-5/12 shadow-xl rounded-sm mb-20">
                    <h1 className="text-center text-3xl font-semibold text-[#336C4E] py-8">Récupération du compte</h1>
                    <p className="text-sm font-semibold  pb-4 mx-10">Veuillez fournir votre numéro d'identification (CIN). Un message de récupération vous sera envoyé à l'adresse e-mail associée à votre compte</p>
                    <p className="text-sm font-semibold   border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                    <form onSubmit={handleSubmit} className="pt-8" action="" method="post">
                        <div className="parts flex flex-wrap justify-around">
                            <div className="first-part space-y-6">
                                <div className="cin">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                    <input value={cin} onChange={hanldeCinChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin" name="cin" required />
                                </div>
                            </div>
                        </div>
                       
                {check && (
                <div>
                    <p className='text-sm text-center mt-2 font-bold text-[#702d2d]'>CIN n'existe pas</p>
                </div>
                )
                }
            
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

export default EnterEmail