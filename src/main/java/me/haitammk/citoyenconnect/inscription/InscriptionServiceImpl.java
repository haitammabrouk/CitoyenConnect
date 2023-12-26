package me.haitammk.citoyenconnect.inscription;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class InscriptionServiceImpl implements InscriptionService {
    
    @Autowired
    private InscriptionRepository inscriptionRepository;

    public void saveImageData(Inscription inscription, MultipartFile personalImage, MultipartFile carteNational) throws IOException {
        inscription.setPersonal_image(personalImage.getBytes());
        inscription.setCarte_national(carteNational.getBytes());

        inscriptionRepository.save(inscription);
    }

    public List<Inscription> getInscriptionEnCours(){
        return inscriptionRepository.findByStatus("en cours");
    }

    @Override
    public Inscription addInscription(Inscription inscription) {
        return inscriptionRepository.save(inscription);
    }

    @Override
    public Inscription getInscription(Long id) {
        return inscriptionRepository.findById(id).get();
    }

    public Inscription updateRaisonInscription(Inscription inscription, String raison){
        inscription.setRaison(raison);
        return inscriptionRepository.save(inscription);
    }

    @Override
    public Inscription updateInscription(Inscription inscription, Long id) {
        Inscription ins = this.getInscription(id);
        ins.setNom(inscription.getNom());
        ins.setPrenom(inscription.getPrenom());
        ins.setEmail(inscription.getEmail());
        ins.setLieuNaissance(inscription.getDateNaissance());
        ins.setSexe(inscription.getSexe());
        ins.setCin_mere(inscription.getCin_mere());
        ins.setCin_pere(inscription.getCin_pere());
        ins.setNom_mere(inscription.getNom_mere());
        ins.setAdresse(inscription.getAdresse());
        ins.setPrenom_mere(inscription.getNom_mere());
        ins.setNom_pere(inscription.getNom_pere());
        ins.setPrenom_pere(inscription.getNom_pere());
        ins.setNationalite(inscription.getNationalite());
        ins.setCarte_national(inscription.getCarte_national());
        ins.setPersonal_image(inscription.getPersonal_image());
        ins.setSignature(inscription.getSignature());
        ins.setDate(new Date());

        return inscriptionRepository.save(ins);
    }

    @Override
    public Inscription removeInscription(Long id) {
        Inscription demande = this.getInscription(id);
        inscriptionRepository.delete(demande);
        return demande;
    }

    @Override
    public List<Inscription> getAllInscriptions() {
        return inscriptionRepository.findAll();
    }

}
