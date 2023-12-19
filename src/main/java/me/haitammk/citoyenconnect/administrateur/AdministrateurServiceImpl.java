package me.haitammk.citoyenconnect.administrateur;

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
    public Administrateur updateAdministrateur(String password, String cin) {
        Administrateur administrateur = this.getAdministrateur(cin);
        
        administrateur.setPassword(password);

        return administrateurRepository.save(administrateur);
    }
}
