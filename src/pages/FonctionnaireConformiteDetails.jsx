import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FonctionnaireArronNavbar from '../components/FonctionnaireArronNavbar';
import PdfViewer from './PdfViewer';  // Import the PdfViewer component
import { useParams } from 'react-router-dom';
import { useSession } from '../../SessionContext';
import Login from './Login';

function FonctionnaireConformiteDetails() {
    // State for storing the fetched data
    const [conformite, setConformite] = useState();
    // State for storing the PDF URL
    const [pdfUrl, setPdfUrl] = useState();

    // Check if sessionId is null (user not logged in)
    const checkId = (id) => {
        return id === null;
    }

    const { sessionId } = useSession();

    // Extract the id parameter from the URL
    const { id } = useParams();

    // Fetch the data when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:8080/DemandeConformite/${id}`)
            .then((response) => {
                setConformite(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error fetching conformite information", error);
            });
    }, [id]);

    useEffect(() => {
        if (conformite) {
            const decodedContent = Uint8Array.from(atob(conformite.document), c => c.charCodeAt(0));
            const documentBlob = new Blob([decodedContent], { type: 'application/pdf' });
            const documentUrl = URL.createObjectURL(documentBlob);
            setPdfUrl(documentUrl);
        }
    }, [conformite]);
    

    // Function to open the document
    const openDocument = (e) => {
        e.preventDefault();

        const decodedContent = atob(conformite.document);
        const documentBlob = new Blob([decodedContent], { type: 'application/pdf' });

        // Create a URL for the Blob
        const documentUrl = URL.createObjectURL(documentBlob);
        // Set the PDF URL in state
        setPdfUrl(documentUrl);
    };

    return (
        // Render the Login component if the user is not logged in
        checkId(sessionId) ? <Login /> : (
            <div className="w-full">
                {/* Render the navigation bar */}
                <FonctionnaireArronNavbar />
                <div className="page-content font-cairo flex justify-center mt-10">
                    <div className="form w-9/12 shadow-xl rounded-sm pb-10">
                        {/* Form header */}
                        <h1 className="text-center text-3xl font-semibold text-[#336C4E]">Demande De Conformité</h1>
                        {/* Form validation note */}
                        <p className="text-sm font-semibold pt-5 border-b border-b-[#A5AAA5] mx-10">
                            <span className="text-[#FF0000]">*</span>Tous le champs sont obligatoires
                        </p>
                        {/* Render the form if conformite data is available */}
                        {conformite && (
                            <form className="pt-8" action="" method="post">
                                {/* Form parts */}
                                <div className="parts flex flex-wrap justify-around">
                                    <div className="first-part space-y-6">
                                    <div className="nom">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="nom">Nom <span className="text-[#FF0000]">*</span></label>
                                    <input value={conformite.nom} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="nom" name="nom" disabled />
                                </div>
                                <div className="prenom">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="prenom">Prenom <span className="text-[#FF0000]">*</span></label>
                                    <input value={conformite.prenom} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="prenom" name="prenom" disabled />
                                </div>
                                
                                    </div>
                                    <div className="second-part space-y-6">
                                    <div className="email">
                                    <label className="text-xs font-semibold block pb-3" htmlFor="email">Email <span className="text-[#FF0000]">*</span></label>
                                    <input  value={conformite.email} className="border border-[#B0B0B0] h-12 w-96 pl-2 rounded-3xl outline-none" type="text" id="email" name="email" disabled />
                                </div>

                                            {/* Button to open the document */}
                                            <button className='hidden' onClick={openDocument}>Ouvrir le document</button>

                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                <div className='pl-20'>
                    {/* Use PdfViewer component for displaying PDF */}
                {pdfUrl && <PdfViewer fileUrl={pdfUrl} text={"ouvrir le document"} />}
                </div>
                
            </div>
        )
    );
}

export default FonctionnaireConformiteDetails;
