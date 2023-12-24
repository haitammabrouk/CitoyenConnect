import React, { useState } from 'react'
import Footer from '../components/Footer'
import CitoyenOptions from '../components/CitoyenOptions'
import CitoyenNavbar from '../components/CitoyenNavbar'
import { useSession } from '../../SessionContext';
import Login from './Login';
import axios from 'axios';
import ConformiteEnCours from './ConformiteEnCours';

function DemandeSignature() {

    const [code, setCode] = useState();
    const [document, setDocument] = useState(null);
    const [check, setCheck] = useState(false);
    const [checkError, setCheckError] = useState(false);

    const [formData, setFormData] = useState(new FormData());

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }

    const handleFileChange = (e, fileType) => {
        const file = e.target.files[0];
    
        // Update the corresponding state variable based on fileType
        if (fileType === 'document') {
          setDocument(file);
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        formData.append('code', code);
        formData.append('document', document);
        formData.append('cin', sessionId)

        axios.post('http://localhost:8080/demandesConformite', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log(response);
            setCheck(true)
            setCheckError(false)
        }).catch((error) => {
            console.log(error);
            setCheck(false)
            setCheckError(true)
        })
    }

    const { sessionId } = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

  return (
    checkId(sessionId) ? <Login /> : (
        <div>
        <div className="w-full font-cairo">
        <CitoyenNavbar />
        <div className="page-content min-h-screen">
            <div className="sections-content flex justify-evenly pt-6">
                {
                    check ? <ConformiteEnCours /> :
                    <div className="first-section w-8/12 mb-20 ">
                        <h1 className="text-2xl font-semibold text-[#336C4E] pb-2 pt-6 border-b border-b-[#B0B0B0]">Demande de Conformité</h1>
                        <p className="text-sm font-semibold  pt-6 mx-4"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                        <form onSubmit={handleSubmit} className="pt-8" action="" method="post">
                            <div className="parts flex flex-wrap justify-around">
                                <div className="first-part space-y-6">
                                    <div className="cin">
                                        <label className="text-xs font-semibold block pb-3" htmlFor="cin">Code Confidentiel <span className="text-[#FF0000]">*</span></label>
                                        <input value={code} onChange={handleCodeChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="password" id="cin" name="cin" />
                                    </div>
                                </div>
                                <div className="second-part space-y-6">
                                    <div className="document">
                                        <label className="text-xs font-semibold block pb-3" htmlFor="document">Document (copie conforme) <span className="text-[#FF0000]">*</span></label>
                                        <input onChange={(e) => handleFileChange(e, 'document')} type="file" id="document" name="document" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn flex justify-start py-4 pl-10">
                                <input type="submit" value="Valider" className="bg-[#336C4E] text-[#ffffff] rounded-xl px-10 py-2" />
                            </div>
                            {
                                checkError && <p className="px-10 font-bold text-sm text-[#86433b]">Le Code confidentiel n'est pas correcte.</p>
                            }
                        </form>
                    </div>
                }
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
    </div>
    )
  )
}

export default DemandeSignature