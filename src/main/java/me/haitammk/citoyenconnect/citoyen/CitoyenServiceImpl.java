package me.haitammk.citoyenconnect.citoyen;

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
        ctyn.setNom(citoyen.getNom());
        ctyn.setPrenom(citoyen.getPrenom());
        ctyn.setEmail(citoyen.getEmail());
        ctyn.setAdresse(citoyen.getAdresse());
        ctyn.setLieuNaissance(citoyen.getDateNaissance());
        ctyn.setSexe(citoyen.getSexe());
        ctyn.setCin_mere(citoyen.getCin_mere());
        ctyn.setCin_pere(citoyen.getCin_pere());
        ctyn.setNom_mere(citoyen.getNom_mere());
        ctyn.setPrenom_mere(citoyen.getNom_mere());
        ctyn.setNom_pere(citoyen.getNom_pere());
        ctyn.setPrenom_pere(citoyen.getNom_pere());
        ctyn.setNationalite(citoyen.getNationalite());
        ctyn.setCarte_national(citoyen.getCarte_national());
        ctyn.setPersonal_image(citoyen.getPersonal_image());
        ctyn.setSignature(citoyen.getSignature());
        
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
