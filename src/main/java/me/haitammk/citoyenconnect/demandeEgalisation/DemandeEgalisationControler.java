package me.haitammk.citoyenconnect.demandeEgalisation;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
import me.haitammk.citoyenconnect.demandeConformite.DemandeConformite;
import me.haitammk.citoyenconnect.demandeConformite.DemandeConformiteDTO;
import me.haitammk.citoyenconnect.email.EmailService;
import me.haitammk.citoyenconnect.inscription.Inscription;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class DemandeEgalisationControler {
    
    @Autowired
    private CitoyenServiceImpl citoyenService;

    @Autowired
    private DemandeEgalisationServiceImpl demandeEgalisationService;

    @Autowired
    private DemandeEgalisationRepository repo;

    @Autowired
    private EmailService emailService;

    @GetMapping(value = "/egalisation-encours")
    public ResponseEntity<Long> getEgalisationEnCours(){
        List<DemandeEgalisation> insEnCours = demandeEgalisationService.getEgalisationCours();
        long count = insEnCours.stream().count();
        return new ResponseEntity<>(count,  HttpStatus.OK);
    }
    @PostMapping(value = "/egalisation-rejeter")
    public ResponseEntity<HttpStatus> rejeterInscription(@RequestParam Map<String, String> requestParams){
     
        String id = requestParams.get("id");

        String raison = requestParams.get("raison");

        Long longId = Long.parseLong(id);
        DemandeEgalisation ins = demandeEgalisationService.getDemandeEgalisation(longId);
        DemandeEgalisationDTO dto = new DemandeEgalisationDTO(ins);
        ins.setStatus("rejete");
        repo.save(ins);
        

        if(ins == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            System.out.println("Inscription found");
            
            demandeEgalisationService.updateRaisonEgalisation(ins, raison);

            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(dto.getEmail());
            mail.setSubject("Rejet Demande d'egalisation");
            mail.setText("Cher Citoyen,\r\n" + //
                    "\r\n" + //
                    "je suis desole de vous informe que votre demande d'egalisation a ete refuse or :\r\n" + //
                    raison+
                    "\r\n" + //
                    "CitoyenConnect");

            emailService.sendEmail(mail);
            System.out.println("email has been sent succefully");

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }


    @GetMapping(value = "/DemandeEgalisation/{id}")
    public ResponseEntity<DemandeEgalisationDTO> getDemandeEgalisation(@PathVariable("id") Long id){
        DemandeEgalisation demandeEgalisation = demandeEgalisationService.getDemandeEgalisation(id);
        DemandeEgalisationDTO egalisationDTO = new DemandeEgalisationDTO(demandeEgalisation);
        return new ResponseEntity<>(egalisationDTO,  HttpStatus.OK);
    }

    @GetMapping(value = "/DocumentEgalisation/{id}", produces = MediaType.APPLICATION_PDF_VALUE)
public ResponseEntity<byte[]> getDocumentEgalisation(@PathVariable("id") Long id) {
    DemandeEgalisation demandeConformite = demandeEgalisationService.getDemandeEgalisation(id);

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

    @PostMapping(value = "/demandesEgalisation",consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<HttpStatus> addDemandeConformite(@RequestParam("code") String code,
    @RequestParam("cin") String cin,
    @RequestParam("document") MultipartFile document,
    @RequestParam("carte") MultipartFile carte) throws IOException
    {
        Optional<Citoyen> ctyn = citoyenService.getCitoyenByCodeConf(code);
        if(ctyn.isPresent()){
            Citoyen citoyen = ctyn.get();
            if(code.equals(citoyen.getCode_conf())){
                DemandeEgalisation demande = new DemandeEgalisation();
                demande.setDate(new Date());
                demande.setStatus("en cours");
                demande.setCitoyen(citoyen);
                demande.setDocument(document.getBytes());
                demande.setCarte_national(carte.getBytes());
                demandeEgalisationService.addDemandeEgalisation(demande);

                return new ResponseEntity<>(HttpStatus.CREATED);
            }else {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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

    @GetMapping(value = "/get-egalisations")
    public ResponseEntity<List<DemandeEgalisationDTO>> getAllEgalisations(){
        List<DemandeEgalisation> egalisations = demandeEgalisationService.getAllDemandesEgalisation();

        List<DemandeEgalisationDTO> egalisationsDTO = egalisations.stream()
                                                    .map(DemandeEgalisationDTO::new)
                                                    .collect(Collectors.toList());

        return new ResponseEntity<>(egalisationsDTO,  HttpStatus.OK);
    }


    
}
