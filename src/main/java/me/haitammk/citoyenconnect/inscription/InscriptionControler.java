package me.haitammk.citoyenconnect.inscription;

import java.io.IOException;
import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class InscriptionControler {
    
    @Autowired
    private InscriptionServiceImpl inscriptionService;

    @GetMapping(value = "/inscription/{cin}")
    public ResponseEntity<Inscription> getInscription(@PathVariable("id") Long id){
        Inscription inscription = inscriptionService.getInscription(id);
        return new ResponseEntity<>(inscription,  HttpStatus.OK);
    }

    @PostMapping(value = "/inscriptions",consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<HttpStatus> addInscription(@RequestParam("cin") String cin,
    @RequestParam("nom") String nom,
    @RequestParam("prenom") String prenom,
    @RequestParam("phone") String phone,
    @RequestParam("email") String email,
    @RequestParam("date") String date,
    @RequestParam("lieu") String lieu,
    @RequestParam("sexe") String sexe,
    @RequestParam("nationalite") String nationalie,
    @RequestParam("cin_pere") String cinPere,
    @RequestParam("cin_mere") String cinMere,
    @RequestParam("nom_pere") String nomPere,
    @RequestParam("nom_mere") String nomMere,
    @RequestParam("prenom_pere") String prenomPere,
    @RequestParam("prenom_mere") String prenomMere,
    @RequestParam("situation") String situation,
    @RequestParam("image") MultipartFile image,
    @RequestParam("carte_national") MultipartFile carteNational) throws IOException
    {
        Inscription inscription = new Inscription();
        inscription.setCin(cin);
        inscription.setNom(nom);
        inscription.setPrenom(prenom);
        inscription.setEmail(email);
        inscription.setPhone(phone);
        inscription.setLieuNaissance(lieu);
        inscription.setSexe(sexe);
        inscription.setDateNaissance(date);
        inscription.setCin_mere(cinMere);
        inscription.setCin_pere(cinPere);
        inscription.setNom_mere(nomMere);
        inscription.setPrenom_mere(prenomMere);
        inscription.setNom_pere(nomPere);
        inscription.setPrenom_pere(prenomPere);
        inscription.setNationalite(nationalie);
        inscription.setSituationFamiliale(situation);
        inscription.setDate(new Date());
        inscriptionService.saveImageData(inscription, image, carteNational);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/inscription/{id}")
    public ResponseEntity<Inscription> updateCitoyen(@PathVariable("id") Long id, @RequestBody Map<String, String> requestParams){
        Inscription inscription = new Inscription();
        inscription.setNom(inscription.getNom());
        inscription.setPrenom(inscription.getPrenom());
        inscription.setEmail(inscription.getEmail());
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
