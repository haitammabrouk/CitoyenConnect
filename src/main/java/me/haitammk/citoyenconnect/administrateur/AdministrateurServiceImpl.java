package me.haitammk.citoyenconnect.administrateur;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.haitammk.citoyenconnect.citoyen.Citoyen;

@Service
public class AdministrateurServiceImpl implements AdministrateurService {

    @Autowired
    private AdministrateurRepository administrateurRepository;

    public String generateCitoyenToken(){
        return UUID.randomUUID().toString();
    }

    public Administrateur saveAdministrateur(Administrateur admin){
        return administrateurRepository.save(admin);
    }

    public boolean administrateurAuthenticate(String cin, String password) {
        Optional<Administrateur> optionalAdmin = administrateurRepository.findById(cin);

        if (optionalAdmin.isPresent()) {
            Administrateur administrateur = optionalAdmin.get();

            if (cin.equals(administrateur.getCin()) && password.equals(administrateur.getPassword())) {
                return true;
            }
        }

        return false;
    }
    
    @Override
    public Administrateur addAdministrateur(Administrateur admin) {
        return administrateurRepository.save(admin);
    }

    @Override
    public Administrateur getAdministrateur(String cin) {
        return administrateurRepository.findById(cin).get();
    }

    public Optional<Administrateur> getAdminForeReset(String cin){
        return administrateurRepository.findById(cin);
    }

    @Override
    public Administrateur updateAdministrateur(String password, String cin) {
        Administrateur administrateur = this.getAdministrateur(cin);
        
        administrateur.setPassword(password);

        return administrateurRepository.save(administrateur);
    }

    

}
