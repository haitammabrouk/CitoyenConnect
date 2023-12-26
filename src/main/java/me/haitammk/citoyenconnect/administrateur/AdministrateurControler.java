package me.haitammk.citoyenconnect.administrateur;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import me.haitammk.citoyenconnect.arrondisement.Arrondisement;
import me.haitammk.citoyenconnect.arrondisement.ArrondisementService;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class AdministrateurControler {

    @Autowired
    private AdministrateurService adminService;

    @Autowired
    private ArrondisementService arrondisementService;

    @GetMapping(value = "/admin/{cin}")
    public ResponseEntity<Administrateur> getAdministrateur(@PathVariable("cin") String cin){
        Administrateur admin = adminService.getAdministrateur(cin);
        return new ResponseEntity<>(admin,  HttpStatus.OK);
    }

    @PostMapping(value = "/admins")
    public ResponseEntity<HttpStatus> addAdministrateur(@RequestBody Map<String, Object> requestParams){

        Long id_arrondisement = (Long)requestParams.get("arrondisement");
        Arrondisement arrondisement = arrondisementService.getArrondisement(id_arrondisement);

       Administrateur admin = new Administrateur();
       admin.setNom((String)requestParams.get("nom"));
        admin.setPrenom((String)requestParams.get("prenom"));
        admin.setEmail((String)requestParams.get("email"));
        admin.setAdresse((String)requestParams.get("adresse"));
        admin.setLieuNaissance((String)requestParams.get("lieuNaissance"));
        admin.setSexe((String)requestParams.get("sexe"));
        admin.setCin_mere((String)requestParams.get("cin_mere"));
        admin.setCin_pere((String)requestParams.get("cin_pere"));
        admin.setNom_mere((String)requestParams.get("nom_mere"));
        admin.setPrenom_mere((String)requestParams.get("prenom_mere"));
        admin.setNom_pere((String)requestParams.get("nom_pere"));
        admin.setPrenom_pere((String)requestParams.get("prenom_pere"));
        admin.setNationalite((String)requestParams.get("nationalite"));
        admin.setCarte_national((byte[])requestParams.get("carte_national"));
        admin.setPersonal_image((byte[])requestParams.get("personal_image"));
        admin.setSignature((byte[])requestParams.get("signature"));
        admin.setArrondisement(arrondisement);
        adminService.addAdministrateur(admin);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/admin/{cin}")
    public ResponseEntity<HttpStatus> updateAdministrateur(@PathVariable("cin") String cin, @RequestBody Map<String, String> requestParams){
        
        String password = requestParams.get("password");
        
        adminService.updateAdministrateur(password, cin);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
