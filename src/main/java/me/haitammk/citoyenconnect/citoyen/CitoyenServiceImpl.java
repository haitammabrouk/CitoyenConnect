package me.haitammk.citoyenconnect.citoyen;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import me.haitammk.citoyenconnect.inscription.Inscription;

@Service
public class CitoyenServiceImpl implements CitoyenService {

    @Autowired
    private CitoyenRepository citoyenRepository;

    public boolean citoyenAuthenticate(String cin, String password) {
        Optional<Citoyen> optionalCitoyen = citoyenRepository.findById(cin);

        if (optionalCitoyen.isPresent()) {
            Citoyen citoyen = optionalCitoyen.get();

            if (cin.equals(citoyen.getCin()) && password.equals(citoyen.getPassword())) {
                return true;
            }
        }

        return false;
    }

    @Override
    public Citoyen getCitoyen(String cin) {
        return citoyenRepository.findById(cin).get();
    }

    public Optional<Citoyen> getCitoyenByCodeConf(String code){
        return citoyenRepository.findByCode_conf(code);
    }

    public Optional<Citoyen> getCitoyenForeReset(String cin){
        return citoyenRepository.findById(cin);
    }

    public Citoyen saveCitoyen(Citoyen citoyen){
        return citoyenRepository.save(citoyen);
    }

    public Citoyen getCitoyenByToken(String token){
        return citoyenRepository.findByToken(token);
    }

    @Override
    public Citoyen addCitoyen(Citoyen citoyen) {
        return citoyenRepository.save(citoyen);
    }

    public String generateCitoyenToken(){
        return UUID.randomUUID().toString();
    }

    public String generateCitoyenCodeConf(){
        return UUID.randomUUID().toString();
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

    public Citoyen getCitoyenByCinAndCodeConf(String cin, String code_conf){
        return citoyenRepository.findByCode_confAndCin(cin, code_conf);
    }

    @Override
    public List<Citoyen> getAllCitoyens() {
        return (List<Citoyen>) citoyenRepository.findAll();
    }
    
}
