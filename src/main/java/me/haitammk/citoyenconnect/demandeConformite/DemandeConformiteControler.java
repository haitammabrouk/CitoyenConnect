package me.haitammk.citoyenconnect.demandeConformite;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.citoyen.CitoyenService;
import me.haitammk.citoyenconnect.citoyen.CitoyenServiceImpl;
import me.haitammk.citoyenconnect.inscription.Inscription;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class DemandeConformiteControler {
    
    @Autowired
    private CitoyenServiceImpl citoyenService;

    @Autowired
    private DemandeConformiteService demandeConformiteService;

     @GetMapping(value = "/DemandeConformite/{id}")
    public ResponseEntity<DemandeConformite> getDemandeConformite(@PathVariable("id") Long id){
        DemandeConformite demandeConformite = demandeConformiteService.getDemandeConformite(id);
        return new ResponseEntity<>(demandeConformite,  HttpStatus.OK);
    }

    @PostMapping(value = "/demandesConformite",consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<HttpStatus> addDemandeConformite(@RequestParam("code") String code,
    @RequestParam("cin") String cin,
    @RequestParam("document") MultipartFile document) throws IOException
    {
        Optional<Citoyen> ctyn = citoyenService.getCitoyenByCodeConf(code);
        if(ctyn.isPresent()){
            Citoyen citoyen = ctyn.get();
            if(code.equals(citoyen.getCode_conf())){
                DemandeConformite demande = new DemandeConformite();
                demande.setDate(new Date());
                demande.setStatus("en cours");
                demande.setCitoyen(citoyen);
                demande.setDocument(document.getBytes());
                demandeConformiteService.addDemandeConformite(demande);

                return new ResponseEntity<>(HttpStatus.CREATED);
            }else {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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

    @GetMapping(value = "/get-conformites")
    public ResponseEntity<List<DemandeConformite>> getAllRapports(){
        List<DemandeConformite> conformites = demandeConformiteService.getAllDemandesConformite();
        return new ResponseEntity<>(conformites,  HttpStatus.OK);
    }

    
}
