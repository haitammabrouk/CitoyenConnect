package me.haitammk.citoyenconnect.password;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.citoyen.CitoyenService;
import me.haitammk.citoyenconnect.citoyen.CitoyenServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PasswordContoller {

    @Autowired
    private CitoyenServiceImpl citoyenService;

    @PostMapping(value="/creation-mdp")
    public ResponseEntity<HttpStatus> creationMotDePasse(@RequestParam Map<String, String> requestParams ){
        
        String cin = requestParams.get("cin");
        String mdp = requestParams.get("mdp");
        String mdpv = requestParams.get("mdpv");
        
        Citoyen citoyen = citoyenService.getCitoyen(cin);

        if(!mdp.equals(mdpv)){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            citoyen.setPassword(mdp); 
            citoyenService.saveCitoyen(citoyen);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @PostMapping(value="/inscription-finale")
    public ResponseEntity<HttpStatus> inscriptionFinale(@RequestParam Map<String, String> requestParams ){
        
        String cin = requestParams.get("cin");
        String code_conf = requestParams.get("code");
        
        Citoyen citoyen = citoyenService.getCitoyenByCinAndCodeConf(cin, code_conf);

        if(citoyen == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    
    
}
