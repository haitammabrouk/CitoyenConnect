package me.haitammk.citoyenconnect.demandeConformite;

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
public class DemandeConformiteControler {
    
    @Autowired
    private CitoyenService citoyenService;

    @Autowired
    private DemandeConformiteService demandeConformiteService;

     @GetMapping(value = "/DemandeConformite/{cin}")
    public ResponseEntity<DemandeConformite> getDemandeConformite(@PathVariable("id") Long id){
        DemandeConformite demandeConformite = demandeConformiteService.getDemandeConformite(id);
        return new ResponseEntity<>(demandeConformite,  HttpStatus.OK);
    }

    @PostMapping(value = "/demandeConformites")
    public ResponseEntity<HttpStatus> addDemandeConformite(@RequestBody Map<String, Object> requestParams){

        String cin = (String)requestParams.get("cin");
        Citoyen citoyen = citoyenService.getCitoyen(cin);

        DemandeConformite demandeConformite = new DemandeConformite();
        demandeConformite.setDocument((byte[])requestParams.get("document"));
        demandeConformite.setRaison((String)requestParams.get("raison"));
        demandeConformite.setStatus((String)requestParams.get("status"));
        demandeConformite.setCitoyen(citoyen);
        demandeConformite.setDate(new Date());
        
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/demandeConformite/{id}")
    public ResponseEntity<DemandeConformite> updateDemandeConformite(@PathVariable("id") Long id, @RequestBody Map<String, Object> requestParams){
        DemandeConformite demandeConformite = new DemandeConformite();
        demandeConformite.setDocument((byte[])requestParams.get("document"));
        demandeConformite.setRaison((String)requestParams.get("raison"));
        demandeConformite.setStatus((String)requestParams.get("status"));
        demandeConformite.setDate(new Date());
        demandeConformiteService.updateDemandeConformite(demandeConformite, id);
        return new ResponseEntity<>(demandeConformite, HttpStatus.OK);
    }
}
