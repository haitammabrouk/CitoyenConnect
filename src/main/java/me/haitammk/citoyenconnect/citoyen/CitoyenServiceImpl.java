package me.haitammk.citoyenconnect.citoyen;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CitoyenServiceImpl implements CitoyenService {

    @Autowired
    private CitoyenRepository citoyenRepository;

    @Override
    public Citoyen getCitoyen(String cin) {
        return citoyenRepository.findById(cin).get();
    }

    @Override
    public Citoyen addCitoyen(Citoyen citoyen) {
        return citoyenRepository.save(citoyen);
    }

    @Override
    public Citoyen updateCitoyen(Citoyen citoyen, String cin) {
        Citoyen ctyn = this.getCitoyen(cin);

        ctyn.builder()
        .nom(citoyen.getNom())
        .prenom(citoyen.getPrenom())
        .email(citoyen.getEmail())
        .adresse(citoyen.getAdresse())
        .lieuNaissance(citoyen.getLieuNaissance())
        .dateNaissance(citoyen.getDateNaissance())
        .sexe(citoyen.getSexe())
        .cin_mere(citoyen.getCin_mere())
        .cin_pere(citoyen.getCin_pere())
        .nom_mere(citoyen.getNom_mere())
        .nom_pere(citoyen.getNom_pere())
        .prenom_mere(citoyen.getPrenom_mere())
        .prenom_pere(citoyen.getPrenom_pere())
        .nationalite(citoyen.getNationalite())
        .carte_national(citoyen.getCarte_national())
        .personal_image(citoyen.getPersonal_image())
        .signature(citoyen.getSignature())
        .build();
        
        return citoyenRepository.save(ctyn);
    }

    @Override
    public Citoyen removeCitoyen(String cin) {
        Citoyen citoyen = this.getCitoyen(cin);
        citoyenRepository.delete(citoyen);
        return citoyen;
    }

    @Override
    public List<Citoyen> getAllCitoyens() {
        return (List<Citoyen>) citoyenRepository.findAll();
    }
    
}
