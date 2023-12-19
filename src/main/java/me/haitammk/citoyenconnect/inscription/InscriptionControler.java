package me.haitammk.citoyenconnect.inscription;

import java.util.Date;
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
public class InscriptionControler {
    
    @Autowired
    private InscriptionService inscriptionService;

    @GetMapping(value = "/inscription/{cin}")
    public ResponseEntity<Inscription> getInscription(@PathVariable("id") Long id){
        Inscription inscription = inscriptionService.getInscription(id);
        return new ResponseEntity<>(inscription,  HttpStatus.OK);
    }

    @PostMapping(value = "/inscriptions")
    public ResponseEntity<HttpStatus> addInscription(@RequestBody Map<String, Object> requestParams){

       Inscription inscription = new Inscription();
       inscription.setNom((String)requestParams.get("nom"));
        inscription.setPrenom((String)requestParams.get("prenom"));
        inscription.setEmail((String)requestParams.get("email"));
        inscription.setAdresse((String)requestParams.get("adresse"));
        inscription.setLieuNaissance((String)requestParams.get("lieuNaissance"));
        inscription.setSexe((String)requestParams.get("sexe"));
        inscription.setCin_mere((String)requestParams.get("cin_mere"));
        inscription.setCin_pere((String)requestParams.get("cin_pere"));
        inscription.setNom_mere((String)requestParams.get("nom_mere"));
        inscription.setPrenom_mere((String)requestParams.get("prenom_mere"));
        inscription.setNom_pere((String)requestParams.get("nom_pere"));
        inscription.setPrenom_pere((String)requestParams.get("prenom_pere"));
        inscription.setNationalite((String)requestParams.get("nationalite"));
        inscription.setCarte_national((byte[])requestParams.get("carte_national"));
        inscription.setPersonal_image((byte[])requestParams.get("personal_image"));
        inscription.setSignature((byte[])requestParams.get("signature"));
        inscription.setDate(new Date());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/inscription/{id}")
    public ResponseEntity<Inscription> updateCitoyen(@PathVariable("id") Long id, @RequestBody Map<String, String> requestParams){
        Inscription inscription = new Inscription();
        inscription.setNom(inscription.getNom());
        inscription.setPrenom(inscription.getPrenom());
        inscription.setEmail(inscription.getEmail());
        inscription.setAdresse(inscription.getAdresse());
        inscription.setLieuNaissance(inscription.getDateNaissance());
        inscription.setSexe(inscription.getSexe());
        inscription.setCin_mere(inscription.getCin_mere());
        inscription.setCin_pere(inscription.getCin_pere());
        inscription.setNom_mere(inscription.getNom_mere());
        inscription.setPrenom_mere(inscription.getNom_mere());
        inscription.setNom_pere(inscription.getNom_pere());
        inscription.setPrenom_pere(inscription.getNom_pere());
        inscription.setNationalite(inscription.getNationalite());
        inscription.setCarte_national(inscription.getCarte_national());
        inscription.setPersonal_image(inscription.getPersonal_image());
        inscription.setSignature(inscription.getSignature());
        inscription.setDate(new Date());
        inscriptionService.updateInscription(inscription, id);
        return new ResponseEntity<>(inscription, HttpStatus.OK);
    }
}
