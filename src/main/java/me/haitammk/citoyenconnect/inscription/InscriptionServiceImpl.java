package me.haitammk.citoyenconnect.inscription;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InscriptionServiceImpl implements InscriptionService {
    
    @Autowired
    private InscriptionRepository inscriptionRepository;

    @Override
    public Inscription addInscription(Inscription inscription) {
        return inscriptionRepository.save(inscription);
    }

    @Override
    public Inscription getInscription(Long id) {
        return inscriptionRepository.findById(id).get();
    }

    @Override
    public Inscription updateInscription(Inscription inscription, Long id) {
        Inscription ins = this.getInscription(id);
        ins.builder()
        .nom(inscription.getNom())
        .prenom(inscription.getPrenom())
        .email(inscription.getEmail())
        .adresse(inscription.getAdresse())
        .lieuNaissance(inscription.getLieuNaissance())
        .dateNaissance(inscription.getDateNaissance())
        .sexe(inscription.getSexe())
        .date(new Date())
        .cin_mere(inscription.getCin_mere())
        .cin_pere(inscription.getCin_pere())
        .nom_mere(inscription.getNom_mere())
        .nom_pere(inscription.getNom_pere())
        .prenom_mere(inscription.getPrenom_mere())
        .prenom_pere(inscription.getPrenom_pere())
        .nationalite(inscription.getNationalite())
        .carte_national(inscription.getCarte_national())
        .personal_image(inscription.getPersonal_image())
        .signature(inscription.getSignature())
        .signature(inscription.getSignature()).build();

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
