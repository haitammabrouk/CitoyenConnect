package me.haitammk.citoyenconnect.demandeConformite;

import java.io.IOException;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
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
import me.haitammk.citoyenconnect.demandeEgalisation.DemandeEgalisation;
import me.haitammk.citoyenconnect.demandeEgalisation.DemandeEgalisationDTO;
import me.haitammk.citoyenconnect.email.EmailService;
import me.haitammk.citoyenconnect.inscription.Inscription;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class DemandeConformiteControler {
    
    @Autowired
    private CitoyenServiceImpl citoyenService;

    @Autowired
    private DemandeConformiteServiceImpl demandeConformiteService;

    @Autowired
    private DemandeConformiteRepository repo;

    @Autowired
    private EmailService emailService;


    @PostMapping(value = "/conformite-rejeter")
    public ResponseEntity<HttpStatus> rejeterInscription(@RequestParam Map<String, String> requestParams){
     
        String id = requestParams.get("id");

        String raison = requestParams.get("raison");

        Long longId = Long.parseLong(id);
        DemandeConformite ins = demandeConformiteService.getDemandeConformite(longId);
        DemandeConformiteDTO dto = new DemandeConformiteDTO(ins);
        ins.setStatus("rejete");
        repo.save(ins);
        

        if(ins == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            System.out.println("Inscription found");
            
            demandeConformiteService.updateRaisonConformite(ins, raison);

            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(dto.getEmail());
            mail.setSubject("Rejet Demande de Conformite");
            mail.setText("Cher Citoyen,\r\n" + //
                    "\r\n" + //
                    "je suis desole de vous informe que votre demande de conformite a ete refuse or :\r\n" + //
                    raison+
                    "\r\n" + //
                    "CitoyenConnect");

            emailService.sendEmail(mail);
            System.out.println("email has been sent succefully");

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping(value = "/conformite-encours")
    public ResponseEntity<Long> getConformiteEnCours(){
        List<DemandeConformite> insEnCours = demandeConformiteService.getConformiteEnCours();
        long count = insEnCours.stream().count();
        return new ResponseEntity<>(count,  HttpStatus.OK);
    }

     @GetMapping(value = "/DemandeConformite/{id}")
    public ResponseEntity<DemandeConformiteDTO> getDemandeConformite(@PathVariable("id") Long id){
        DemandeConformite demandeConformite = demandeConformiteService.getDemandeConformite(id);
        DemandeConformiteDTO conformiteDTO = new DemandeConformiteDTO(demandeConformite);
        return new ResponseEntity<>(conformiteDTO,  HttpStatus.OK);
    }


    @GetMapping(value = "/DocumentConformite/{id}", produces = MediaType.APPLICATION_PDF_VALUE)
public ResponseEntity<byte[]> getDocumentConformite(@PathVariable("id") Long id) {
    DemandeConformite demandeConformite = demandeConformiteService.getDemandeConformite(id);

    if (demandeConformite != null) {
        // Assuming 'document' is a byte array or a Blob in DemandeConformite
        byte[] documentBytes = demandeConformite.getDocument(); // Replace 'getDocument()' with your actual method

        HttpHeaders headers = new HttpHeaders();
        headers.setContentDispositionFormData("inline", "document_" + id + ".pdf");

        return new ResponseEntity<>(documentBytes, headers, HttpStatus.OK);
    } else {
        // Handle the case when demandeConformite is not found
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
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
    public ResponseEntity<List<DemandeConformiteDTO>> getAllConformites(){
        List<DemandeConformite> conformites = demandeConformiteService.getAllDemandesConformite();

        List<DemandeConformiteDTO> conformitesDTO = conformites.stream()
                                                    .map(DemandeConformiteDTO::new)
                                                    .collect(Collectors.toList());

        return new ResponseEntity<>(conformitesDTO,  HttpStatus.OK);
    }

    
}
