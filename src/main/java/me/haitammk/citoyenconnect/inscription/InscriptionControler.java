package me.haitammk.citoyenconnect.inscription;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

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
import me.haitammk.citoyenconnect.citoyen.CitoyenServiceImpl;
import me.haitammk.citoyenconnect.email.EmailService;
import me.haitammk.citoyenconnect.reclamation.Reclamation;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class InscriptionControler {
    
    @Autowired
    private InscriptionServiceImpl inscriptionService;

    @Autowired
    private CitoyenServiceImpl citoyenService;

    @Autowired
    private InscriptionRepository repo;

    @Autowired
    private EmailService emailService;

    @GetMapping(value = "/inscription-encours")
    public ResponseEntity<Long> getInscriptionEnCours(){
        List<Inscription> insEnCours = inscriptionService.getInscriptionEnCours();
        long count = insEnCours.stream().count();
        return new ResponseEntity<>(count,  HttpStatus.OK);
    }

    @GetMapping(value = "/inscription/{id}")
    public ResponseEntity<Inscription> getInscription(@PathVariable("id") Long id){
        Inscription inscription = inscriptionService.getInscription(id);
        return new ResponseEntity<>(inscription,  HttpStatus.OK);
    }

    @PostMapping(value = "/inscription-rejeter")
    public ResponseEntity<HttpStatus> rejeterInscription(@RequestParam Map<String, String> requestParams){
     
        String id = requestParams.get("id");

        String raison = requestParams.get("raison");

        Long longId = Long.parseLong(id);
        Inscription ins = inscriptionService.getInscription(longId);

        ins.setStatus("rejete");
        repo.save(ins);
        

        if(ins == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            System.out.println("Inscription found");
            
            inscriptionService.updateRaisonInscription(ins, raison);

            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(ins.getEmail());
            mail.setSubject("Rejet Demande d'inscription");
            mail.setText("Cher Citoyen,\r\n" + //
                    "\r\n" + //
                    "je suis desole de vous informe que votre demande d'inscription a ete refuse or :\r\n" + //
                    raison+
                    "\r\n" + //
                    "CitoyenConnect");

            emailService.sendEmail(mail);
            System.out.println("email has been sent succefully");

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @PostMapping(value = "/inscription-accepter")
    public ResponseEntity<HttpStatus> accepterInscription(@RequestParam Map<String, String> requestParams){
     
        String id = requestParams.get("id");

        Long longId = Long.parseLong(id);
        Inscription ins = inscriptionService.getInscription(longId);

        ins.setStatus("disponible");
        repo.save(ins);
        

        if(ins == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            System.out.println("Inscription found");
            Citoyen citoyen = new Citoyen();
            citoyen.setCin(ins.getCin());
            citoyen.setNom(ins.getNom());
            citoyen.setPrenom(ins.getPrenom());
            citoyen.setEmail(ins.getEmail());
            citoyen.setLieuNaissance(ins.getDateNaissance());
            citoyen.setSexe(ins.getSexe());
            citoyen.setAdresse(ins.getAdresse());
            citoyen.setCin_mere(ins.getCin_mere());
            citoyen.setCin_pere(ins.getCin_pere());
            citoyen.setNom_mere(ins.getNom_mere());
            citoyen.setPrenom_mere(ins.getNom_mere());
            citoyen.setNom_pere(ins.getNom_pere());
            citoyen.setPrenom_pere(ins.getPrenom_pere());
            citoyen.setNationalite(ins.getNationalite());
            citoyen.setPersonal_image(ins.getPersonal_image());
            citoyen.setCarte_national(ins.getCarte_national());
            citoyen.setCode_conf(citoyenService.generateCitoyenCodeConf());

            citoyen.setToken(citoyenService.generateCitoyenToken());
            citoyenService.addCitoyen(citoyen);

            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(citoyen.getEmail());
            mail.setSubject("Confirmation d'inscription acceptée");
            mail.setText("Cher Citoyen,\r\n" + //
                    "\r\n" + //
                    "Nous sommes heureux de vous informer que votre demande d'inscription a été acceptée. Vous êtes maintenant prêt(e) à créer votre compte.\r\n" + //
                    "\r\n" + //
                    "Code Confidentiel : "+citoyen.getCode_conf()+"\r\n" + //
                    "\r\n" + //
                    "Veuillez utiliser ce code lors de la création de votre compte. Cliquez sur le lien ci-dessous pour commencer le processus de création de compte :\r\n" + //
                    "\r\n" + //
                    "\r\n" + //
                    "Nous vous remercions de faire partie de notre communauté et restons à votre disposition pour toute assistance supplémentaire.\r\n" + //
                    "\r\n" + //
                    "Cordialement,\r\n" + //
                    "CitoyenConnect");

            emailService.sendEmail(mail);
            System.out.println("email has been sent succefully");

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping(value = "/get-inscriptions")
    public ResponseEntity<List<Inscription>> getAllRapports(){
        List<Inscription> inscriptions = inscriptionService.getInscriptionEnCours();
        return new ResponseEntity<>(inscriptions,  HttpStatus.OK);
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
    @RequestParam("adresse") String adresse,
    @RequestParam("image") MultipartFile image,
    @RequestParam("carte_national") MultipartFile carteNational) throws IOException
    {
        Inscription inscription = new Inscription();
        inscription.setCin(cin);
        inscription.setNom(nom);
        inscription.setPrenom(prenom);
        inscription.setEmail(email);
        inscription.setPhone(phone);
        inscription.setAdresse(adresse);
        inscription.setLieuNaissance(lieu);
        inscription.setSexe(sexe);
        inscription.setDateNaissance(date);
        inscription.setAdresse(adresse);
        inscription.setCin_mere(cinMere);
        inscription.setCin_pere(cinPere);
        inscription.setNom_mere(nomMere);
        inscription.setPrenom_mere(prenomMere);
        inscription.setNom_pere(nomPere);
        inscription.setPrenom_pere(prenomPere);
        inscription.setNationalite(nationalie);
        inscription.setSituationFamiliale(situation);
        inscription.setStatus("en cours");
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
