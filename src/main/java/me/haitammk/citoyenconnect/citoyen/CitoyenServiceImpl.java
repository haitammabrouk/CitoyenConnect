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
