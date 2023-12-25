//importing bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function PdfViewer({fileUrl, text}) {
  return (
    <div className="App">
        <div className="container  pt-2 ">
  
  <button type="button" className="btn bg-[#336C4E] text-[#ffffff] ml-20" data-bs-toggle="modal" data-bs-target="#exampleModal">
    {text}
  </button>
  
 
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content" style={{height:"500px"}}>
        <div className="modal-header">
          <h5 className="modal-title italic text-[#565555]" id="exampleModalLabel">document</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
      <iframe
      src={fileUrl}
      frameBorder="0"
      scrolling="auto"
      height="100%"
      width="100%"
  ></iframe>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn text-[#565555] border-2 rounded-lg border-[#565555]" data-bs-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
  </div>
     
      
    </div>
  );
}

export default PdfViewer;