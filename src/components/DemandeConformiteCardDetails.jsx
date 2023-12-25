import React from 'react';
import { Link } from 'react-router-dom';

function DemandeConformiteCardDetails({ inscription, nom, prenom, id, date }) {
  const downloadDocument = () => {
    // Replace with the actual API endpoint for fetching the document
    const documentEndpoint = `http://localhost:8080/DocumentConformite/${id}`;

    fetch(documentEndpoint)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `document_${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error('Error downloading document:', error);
        // Handle the error, e.g., show a message to the user
      });
  };

  return (
    <div className='font-cairo border border-[#727572] w-insc rounded-md pb-2'>
      <div className="content space-y-2 pb-4 px-4">
        <h1 className='text-xl font-semibold pt-2'>Demande De Conformité</h1>
        <p><span className='font-semibold'>ID</span> : {id}</p>
        <p><span className='font-semibold text-[#636363]'>a été soumis par </span> : <span className='font-semibold'>{nom} {prenom}</span>
          <span className='font-semibold text-[#636363] pl-2'>, le </span> <span className='font-semibold'>{date}</span></p>
      </div>
      <p className="text-sm underline text-[#007ad9]">
        <Link to={`/fonctionnaire-conformite-details/${id}`}>
          Vérifier les informations liées à la demande. (lien)
        </Link>
      </p>
      <ul className='text-md text-[#636363] font-semibold  flex justify-around space-x-3'>
        <li className='border-r border-r-[#000000]'>
          <p>Pour voir le document, sélectionnez 'Voir le Document'</p>
          <button className='py-2 px-4 mt-2 bg-[#58815c] text-[#ffffff]' onClick={downloadDocument}>
            Télécharger le Document
          </button>
        </li>
        <li className='pl-2'>
          <p>Pour rejeter la demande, spécifiez la raison du rejet et sélectionnez 'Rejeter la Demande'</p>
          <form method='post'>
            <textarea className='h-44 w-full outline-none border border-[#636363] text-[#636363] px-2 py-2 rounded-lg' name="raison" id="raison" cols="30" rows="10" placeholder='la raison du rejet'></textarea>
            <button className='py-2 px-4 mt-2 bg-[#86433b] text-[#ffffff]'>Rejeter La Demande</button>
          </form>
        </li>
      </ul>
    </div>
  );
}

export default DemandeConformiteCardDetails;
