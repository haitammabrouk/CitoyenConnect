package me.haitammk.citoyenconnect.reclamation;

import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController

@CrossOrigin(origins = "http://localhost:5173")
public class ReclamationControler {

    @Autowired
    private ReclamationServiceImpl reclamationService;
    
    @GetMapping(value = "/reclamation/{id}")
    public ResponseEntity<Reclamation> getReclamation(@PathVariable("id") Long id){
        Reclamation reclamation = reclamationService.getReclamation(id);
        return new ResponseEntity<>(reclamation,  HttpStatus.OK);
    }

    @PostMapping(value = "/reclamations",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<HttpStatus> addReclamation(
        @RequestParam("nom") String nom,
        @RequestParam("email") String email,
        @RequestParam("message") String message
      ) throws IOException {

        Reclamation reclamation = new Reclamation();
        reclamation.setEmail(email);
        reclamation.setMessage(message);
        reclamation.setNom(nom);
        reclamationService.addReclamation(reclamation);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    
     
 
   
}
