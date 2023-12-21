package me.haitammk.citoyenconnect.citoyen;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CitoyenController {
    
    @Autowired
    private CitoyenService citoyenService;

    @GetMapping(value = "/citoyen/{cin}")
    public ResponseEntity<Citoyen> getCitoyen(@PathVariable("cin") String cin){
        Citoyen citoyen = citoyenService.getCitoyen(cin);
        return new ResponseEntity<>(citoyen,  HttpStatus.OK);
    }

    @PostMapping(value = "/citoyens")
    public ResponseEntity<HttpStatus> addCitoyen(@RequestBody Map<String, Object> requestParams){

       Citoyen citoyen = new Citoyen();
       citoyen.setNom((String)requestParams.get("nom"));
        citoyen.setPrenom((String)requestParams.get("prenom"));
        citoyen.setEmail((String)requestParams.get("email"));
        citoyen.setAdresse((String)requestParams.get("adresse"));
        citoyen.setLieuNaissance((String)requestParams.get("lieuNaissance"));
        citoyen.setSexe((String)requestParams.get("sexe"));
        citoyen.setCin_mere((String)requestParams.get("cin_mere"));
        citoyen.setCin_pere((String)requestParams.get("cin_pere"));
        citoyen.setNom_mere((String)requestParams.get("nom_mere"));
        citoyen.setPrenom_mere((String)requestParams.get("prenom_mere"));
        citoyen.setNom_pere((String)requestParams.get("nom_pere"));
        citoyen.setPrenom_pere((String)requestParams.get("prenom_pere"));
        citoyen.setNationalite((String)requestParams.get("nationalite"));
        citoyen.setCarte_national((byte[])requestParams.get("carte_national"));
        citoyen.setPersonal_image((byte[])requestParams.get("personal_image"));
        citoyen.setSignature((byte[])requestParams.get("signature"));
        citoyenService.addCitoyen(citoyen);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/citoyen/{cin}")
    public ResponseEntity<Citoyen> updateCitoyen(@PathVariable("cin") String cin, @RequestBody Map<String, String> requestParams){
        Citoyen citoyen = new Citoyen();
        String password = requestParams.get("password");
        citoyen.setPassword(password);
        citoyenService.updateCitoyen(citoyen, cin);
        return new ResponseEntity<>(citoyen, HttpStatus.OK);
    }
}
