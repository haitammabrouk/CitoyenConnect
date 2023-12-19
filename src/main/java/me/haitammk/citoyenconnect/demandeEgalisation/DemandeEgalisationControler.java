package me.haitammk.citoyenconnect.demandeEgalisation;

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

import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.citoyen.CitoyenService;

@RestController
public class DemandeEgalisationControler {
    
    @Autowired
    private CitoyenService citoyenService;

    @Autowired
    private DemandeEgalisationService demandeEgalisationService;

     @GetMapping(value = "/demandeEgalisation/{id}")
    public ResponseEntity<DemandeEgalisation> getDemandeEgalisation(@PathVariable("id") Long id){
        DemandeEgalisation demandeEgalisation = demandeEgalisationService.getDemandeEgalisation(id);
        return new ResponseEntity<>(demandeEgalisation,  HttpStatus.OK);
    }

    @PostMapping(value = "/demandeEgalisations")
    public ResponseEntity<HttpStatus> addDemandeEgalisation(@RequestBody Map<String, Object> requestParams){

        String cin = (String)requestParams.get("cin");
        Citoyen citoyen = citoyenService.getCitoyen(cin);

        DemandeEgalisation demandeEgalisation = new DemandeEgalisation();
        demandeEgalisation.setDocument((byte[])requestParams.get("document"));
        demandeEgalisation.setRaison((String)requestParams.get("raison"));
        demandeEgalisation.setStatus((String)requestParams.get("status"));
        demandeEgalisation.setCitoyen(citoyen);
        demandeEgalisation.setDate(new Date());
        
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/demandeEgalisation/{id}")
    public ResponseEntity<DemandeEgalisation> updateDemandeEgalisation(@PathVariable("id") Long id, @RequestBody Map<String, Object> requestParams){
        DemandeEgalisation demandeEgalisation = new DemandeEgalisation();
        demandeEgalisation.setDocument((byte[])requestParams.get("document"));
        demandeEgalisation.setRaison((String)requestParams.get("raison"));
        demandeEgalisation.setStatus((String)requestParams.get("status"));
        demandeEgalisation.setDate(new Date());
        demandeEgalisationService.updateDemandeEgalisation(demandeEgalisation, id);
        return new ResponseEntity<>(demandeEgalisation, HttpStatus.OK);
    }
}
