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

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PasswordContoller {

    @Autowired
    private CitoyenService citoyenService;

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
