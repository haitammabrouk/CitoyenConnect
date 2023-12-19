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
}
