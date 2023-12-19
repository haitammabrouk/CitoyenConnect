package me.haitammk.citoyenconnect.administrateur;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministrateurServiceImpl implements AdministrateurService {

    @Autowired
    private AdministrateurRepository administrateurRepository;
    
    @Override
    public Administrateur addAdministrateur(Administrateur admin) {
        return administrateurRepository.save(admin);
    }

    @Override
    public Administrateur getAdministrateur(String cin) {
        return administrateurRepository.findById(cin).get();
    }

    @Override
    public Administrateur updateAdministrateur(Administrateur admin, String cin) {
        Administrateur administrateur = this.getAdministrateur(cin);
        
        administrateur.builder()
        .nom(admin.getNom())
        .prenom(admin.getPrenom())
        .email(admin.getEmail())
        .adresse(admin.getAdresse())
        .lieuNaissance(admin.getLieuNaissance())
        .dateNaissance(admin.getDateNaissance())
        .sexe(admin.getSexe())
        .cin_mere(admin.getCin_mere())
        .cin_pere(admin.getCin_pere())
        .nom_mere(admin.getNom_mere())
        .nom_pere(admin.getNom_pere())
        .prenom_mere(admin.getPrenom_mere())
        .prenom_pere(admin.getPrenom_pere())
        .nationalite(admin.getNationalite())
        .carte_national(admin.getCarte_national())
        .personal_image(admin.getPersonal_image())
        .signature(admin.getSignature())
        .build();

        return administrateurRepository.save(administrateur);
    }
}
