import { useState } from "react";
import Navbar from "../components/Navbar"
import InscriptionEnCours from "./InscriptionEnCours";
import axios from "axios";


function DemandeInscription() {

    const [cin, setCin] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [date, setDate] = useState('');
    const [lieu, setLieu] = useState('');
    const [nationalite, setNationalite] = useState('');
    const [situation, setSituation] = useState('');
    const [sexe, setSexe] = useState('');
    const [nomMere, setNomMere] = useState('');
    const [nomPere, setNomPere] = useState('');
    const [prenomMere, setPrenomMere] = useState('');
    const [prenomPere, setPrenomPere] = useState('');
    const [cinMere, setCinMere] = useState('');
    const [cinPere, setCinPere] = useState('');
    const [email, setEmail] = useState('');
    const [personalImageFile, setPersonalImageFile] = useState(null);
    const [carteNationalFile, setCarteNationalFile] = useState(null);
    const [phone, setPhone] = useState(null);
    const [adresse, setAdresse] = useState('');

    const [check, setCheck] = useState(false);

    const [formData, setFormData] = useState(new FormData());

    const handleCinChange = (e) => {
        setCin(e.target.value);
    }


    const handleNomChange = (e) => {
        setNom(e.target.value);
    }

    const handlePrenomChange = (e) => {
        setPrenom(e.target.value);
    }

    const handleAdresseChange = (e) => {
        setAdresse(e.target.value);
    }

    const handleLieuChange = (e) => {
        setLieu(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNationaliteChange = (e) => {
        setNationalite(e.target.value);
    }

    const handleSituationChange = (e) => {
        setSituation(e.target.value);
    }

    const handleSexeChange = (e) => {
        setSexe(e.target.value);
    }

    const handleNomMereChange = (e) => {
        setNomMere(e.target.value);
    }

    const handleNomPereChange = (e) => {
        setNomPere(e.target.value);
    }

    const handlePrenomPereChange = (e) => {
        setPrenomPere(e.target.value);
    }

    const handlePrenomMereChange = (e) => {
        setPrenomMere(e.target.value);
    }

    const handleCinMereChange = (e) => {
        setCinMere(e.target.value);
    }

    const handleCinPereChange = (e) => {
        setCinPere(e.target.value);
    }

    const handleFileChange = (e, fileType) => {
        const file = e.target.files[0];
    
        // Update the corresponding state variable based on fileType
        if (fileType === 'personal_image') {
          setPersonalImageFile(file);
        } else if (fileType === 'carte_national') {
          setCarteNationalFile(file);
        }
      };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.append('cin', cin);
        formData.append('nom', nom);
        formData.append('prenom', prenom);
        formData.append('email', email);
        formData.append('date', date);
        formData.append('lieu', lieu);
        formData.append('phone', phone);
        formData.append('nationalite', nationalite);
        formData.append('situation', situation);
        formData.append('sexe', sexe);
        formData.append('nom_mere', nomMere);
        formData.append('nom_pere', nomPere);
        formData.append('prenom_mere', prenomMere);
        formData.append('prenom_pere', prenomPere);
        formData.append('cin_mere', cinMere);
        formData.append('cin_pere', cinPere);
        formData.append('adresse', adresse);

        formData.append('image', personalImageFile);
        formData.append('carte_national', carteNationalFile);

        axios.post('http://localhost:8080/inscriptions', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log(response);
            setCheck(true)
        }).catch((error) => {
            console.log(error);
            setCheck(false)
        })
    }




  return (
        check ? <InscriptionEnCours /> :
    ( 
        <div className="w-full">
            <Navbar />
            <div className="page-content font-cairo flex justify-center mt-10">
                <div className="form w-9/12 shadow-xl rounded-sm">
                    <h1 className="text-center text-3xl font-semibold text-[#336C4E] ">Demande D'inscription</h1>
                    <p className="text-sm font-semibold  pt-5 border-b border-b-[#A5AAA5] mx-10"><span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires</p>
                    <form onSubmit={handleSubmit} className="pt-8" action="" method="post">
                        <div className="parts flex flex-wrap justify-around">
                            <div className="first-part space-y-6">
                                <div className="cin">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin">CIN <span className="text-[#FF0000]">*</span></label>
                                    <input value={cin} onChange={handleCinChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin" name="cin" />
                                </div>
                                <div className="nom">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nom">Nom <span className="text-[#FF0000]">*</span></label>
                                    <input value={nom} onChange={handleNomChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom" name="nom" required />
                                </div>
                                <div className="prenom">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="prenom">Prenom <span className="text-[#FF0000]">*</span></label>
                                    <input value={prenom} onChange={handlePrenomChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom" name="prenom" required />
                                </div>
                                <div className="phone">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="phone">Nº Telephone  <span className="text-[#FF0000]">*</span></label>
                                    <input value={phone} onChange={handlePhoneChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="phone" name="phone" required />
                                </div>
                                <div className="email">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="email">Email <span className="text-[#FF0000]">*</span></label>
                                    <input value={email} onChange={handleEmailChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="email" name="email" required />
                                </div>
                                <div className="adrese">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="adresse">Adresse <span className="text-[#FF0000]">*</span></label>
                                    <input value={adresse} onChange={handleAdresseChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="adresse" name="adresse" required />
                                </div>
                                <div className="date">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="date">Date de naisance <span className="text-[#FF0000]">*</span></label>
                                    <input value={date} onChange={handleDateChange} className="border border-[#B0B0B0] pr-2 h-12 w-96 pl-2 rounded-3xl outline-none" type="date" id="date" name="date" required />
                                </div>
                                <div className="lieu">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="lieu">Lieu de naissance <span className="text-[#FF0000]">*</span></label>
                                    <input value={lieu} onChange={handleLieuChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="lieu" name="lieu" required />
                                </div>
                                <div className="nationalite">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nationalite">Nationalite <span className="text-[#FF0000]">*</span></label>
                                    <input value={nationalite} onChange={handleNationaliteChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nationalite" name="nationalite" />
                                </div>
                                <div className="situation">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="situation">Situation familiale <span className="text-[#FF0000]">*</span></label>
                                    <select value={situation} onChange={handleSituationChange}  className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" id="situation" name="situation">
                                        <option value="celibataire">Célibataire</option>
                                        <option value="marie">Marié</option>
                                    </select>
                                </div>
    
                                <div className="sexe">
                                    <label htmlFor="sexe" className="text-xs font-semibold pb-3">Sexe <span className="text-[#FF0000]">*</span></label>
                                    <div className="flex space-x-8">
                                        <div className="male">
                                            <input id="male" type="radio" name="sexe" value="male" onChange={handleSexeChange} />
                                            <label className="text-sm text-[#676867] pl-2" htmlFor="male">Masculin</label>
                                        </div>
                                        <div className="female">
                                            <input id="female" type="radio" name="sexe" value="female" onChange={handleSexeChange} />
                                            <label className="text-sm text-[#676867] pl-2" htmlFor="female">Féminin</label>
                                        </div>
                                    </div>
                
                                </div>
                                
                            </div>
                            <div className="second-part space-y-6">
                                <div className="cin_pere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin_pere">CIN du père <span className="text-[#FF0000]">*</span></label>
                                    <input value={cinPere} onChange={handleCinPereChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin_pere" name="cin_pere" />
                                </div>
                                <div className="nom_pere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nom_pere">Nom du père <span className="text-[#FF0000]">*</span></label>
                                    <input value={nomPere} onChange={handleNomPereChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom_pere" name="nom_pere" />
                                </div>
                                <div className="prenom_pere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="prenom_pere">Prenom du père <span className="text-[#FF0000]">*</span></label>
                                    <input value={prenomPere} onChange={handlePrenomPereChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom_pere" name="nom_pere" />
                                </div>
                                <div className="cin_mere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="cin_mere">CIN du mère <span className="text-[#FF0000]">*</span></label>
                                    <input value={cinMere} onChange={handleCinMereChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="cin_mere" name="cin_mere" />
                                </div>
                                <div className="nom_mere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nom_mere">Nom de la mère <span className="text-[#FF0000]">*</span></label>
                                    <input value={nomMere} onChange={handleNomMereChange} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom_mere" name="nom_mere" />
                                </div>
                                <div className="prenom_mere">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="prenom_mere">Prenom de la mère <span className="text-[#FF0000]">*</span></label>
                                    <input value={prenomMere} onChange={handlePrenomMereChange} className="border border-[#B0B0B0] pb-3 h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom_mere" name="prenom_mere" />
                                </div>
                                <div className="image">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="image">Image personelle <span className="text-[#FF0000]">*</span></label>
                                    <input type="file" onChange={(e) => handleFileChange(e, 'personal_image')} id="image" name="image" />
                                </div>
                                <div className="carte_national">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="carte_national">Carte nationale (scanné) <span className="text-[#FF0000]">*</span></label>
                                    <input type="file" onChange={(e) => handleFileChange(e, 'carte_national')} id="carte_national" name="carte_national" />
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
  )
}

export default DemandeInscription