package me.haitammk.citoyenconnect.reclamation;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ReclamationControler {

    @Autowired
    private ReclamationService reclamationService;
    
    @GetMapping(value = "/reclamation/{id}")
    public ResponseEntity<Reclamation> getReclamation(@PathVariable("id") Long id){
        Reclamation reclamation = reclamationService.getReclamation(id);
        return new ResponseEntity<>(reclamation,  HttpStatus.OK);
    }

    @PostMapping(value = "/reclamations")
    public ResponseEntity<HttpStatus> addReclamation(@RequestBody Map<String, String> requestParams){

        Reclamation reclamation = new Reclamation();
        reclamation.setEmail(requestParams.get("email"));
        reclamation.setMessage(requestParams.get("message"));
        reclamation.setNom(requestParams.get("nom"));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
