import { useState } from "react";
import SignatureCanvas from "react-signature-canvas";


function SignaturePad(){
    const [sign,setSign] = useState()
    const [url,setUrl] = useState()

    const handleClear= () =>{
        sign.clear()
        setUrl('')
    }
    const handleGenerate= () =>{
        setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
    }


    return(
        <div>
            <div style={{border:"1px solid black",width: 300, height: 100}}>
                <SignatureCanvas 
                    canvasProps={{width: 300, height: 100, className: 'sigCanvas'}}
                    ref={data=>setSign(data)}
                />
            </div>
        </div>
    )
}
export default SignaturePad;