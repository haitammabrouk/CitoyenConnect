import { useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import axios from "axios";
import { useSession } from "../../SessionContext";
import { Link, useNavigate } from "react-router-dom";


function Login() {

    const [cin, setCin] = useState('');
    const [pwd, setPwd] = useState('');
    const [check, setCheck] = useState('');


    const {setSessionId} = useSession();

    const navigate = useNavigate();

    const handleCinChange = (e) => {
        setCin(e.target.value);
    }

    const handlePwdChange = (e) => {
        setPwd(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/login', {
            cin, 
            pwd
        })
        .then((response) => {
            setCheck(false);

            const userType = response.data.userType;
            const sessionId = response.data.sessionId;
            
            setSessionId(sessionId);
            
            if(userType === 'citoyen'){
                navigate('/citoyen-home')
            }else if(userType === 'administrateur'){
                navigate('/admin-home')
            }

        }).catch((error) => {
            console.log("error fetching user informations ", error);
            setCheck(true);
        });        
    }

  return (
    <div className="w-full font-cairo">
        <Navbar />
            <div className="page-content font-cairo flex justify-center mt-10">
                <div className="form w-5/12 shadow-xl rounded-sm mb-20">
                    <h1 className="text-center text-3xl font-semibold text-[#336C4E] py-8">Authentification</h1>
                    <p className="text-sm font-semibold  pb-4 mx-10">Veuillez saisir votre CIN et nouveau mot de passe. Merci de suivre ces étapes pour assurer la sécurité de votre compte. Nous vous remercions de votre confiance.</p>
                    <p className="text-sm font-semibold   border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                    {
                        check && (
                            <div>
                                <p className=' pt-4 text-[#933939] font-bold text-center  text-sm'> Les Données sont invalides</p>
                            </div>
                        )
                    }
                
                    <form onSubmit={handleSubmit} className="pt-6" action="" method="post">
                        <div className="parts flex flex-wrap justify-around">
                            <div className="first-part space-y-6">
                                <div className="cin">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                    <input value={cin} onChange={handleCinChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin" name="cin" required />
                                </div>
                                <div className="pwd pb-3">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="pwd">Mot de passe <span className="text-[#FF0000]">*</span></label>
                                    <input value={pwd} onChange={handlePwdChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="password" id="pwd" name="pwd" required />
                                </div>
                                <Link to = '/entrer-cin' className="text-[#4A4D49] text-sm underline">Mot de passe oublié ?</Link>
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