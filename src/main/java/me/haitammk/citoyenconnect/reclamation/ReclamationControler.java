package me.haitammk.citoyenconnect.reclamation;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.haitammk.citoyenconnect.email.EmailService;
import me.haitammk.citoyenconnect.email.EmailServiceImpl;
import me.haitammk.citoyenconnect.inscription.Inscription;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class ReclamationControler {

    @Autowired
    private EmailService emailService;

    @Autowired
    private ReclamationServiceImpl reclamationService;

    @Autowired
    private ReclamationRepository repo;
    
    @GetMapping(value = "/reclamation/{id}")
    public ResponseEntity<Reclamation> getReclamation(@PathVariable("id") Long id){
        Reclamation reclamation = reclamationService.getReclamation(id);
        return new ResponseEntity<>(reclamation,  HttpStatus.OK);
    }

    @GetMapping(value = "/reclamation-encours")
    public ResponseEntity<Long> getReclamationEnCours(){
        List<Reclamation> reclamationsEnCours = reclamationService.getReclamationEnCours();
        long count = reclamationsEnCours.stream().count();
        return new ResponseEntity<>(count,  HttpStatus.OK);
    }


    @PostMapping(value = "/reclamation-reponse")
    public ResponseEntity<HttpStatus> rejeterInscription(@RequestParam Map<String, String> requestParams){
     
        String id = requestParams.get("id");

        String reponse = requestParams.get("reponse");

        Long longId = Long.parseLong(id);
        Reclamation reclamation = reclamationService.getReclamation(longId);
        reclamation.setStatus("disponible");
        repo.save(reclamation);
        

        if(reclamation == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            System.out.println("reclamation found");

            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(reclamation.getEmail());
            mail.setSubject("Reponse Au Reclamation");
            mail.setText("Cher Citoyen,"+"\n"+

           "Nous avons bien reçu votre réclamation concernant "+ reclamation.getMessage()+" "+reponse+"\n"+
            
            "Merci de votre compréhension."+"\n"+
            
            "Cordialement \n"+"CitoyenConnect");

            emailService.sendEmail(mail);
            
            System.out.println("email has been sent succefully");

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    

    @GetMapping(value = "/get-reclamations")
    public ResponseEntity<List<Reclamation>> getAllRapports(){
        List<Reclamation> reclamations = reclamationService.getReclamationEnCours();
        return new ResponseEntity<>(reclamations,  HttpStatus.OK);
    }

    @PostMapping(value = "/reclamations", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<HttpStatus> addReclamation(@RequestParam("nom") String nom,
    @RequestParam("email") String email,
    @RequestParam("message") String message
    ){

        Reclamation reclamation = new Reclamation();
        reclamation.setEmail(email);
        reclamation.setMessage(message);
        reclamation.setNom(nom);
        reclamation.setDate(new Date());
        reclamation.setStatus("en cours");
        reclamationService.addReclamation(reclamation);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
