package me.haitammk.citoyenconnect.demandeConformite;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemandeConformiteServiceImpl implements DemandeConformiteService {

    @Autowired
    private DemandeConformiteRepository demandeConformiteRepository;
    
    @Override
    public DemandeConformite addDemandeConformite(DemandeConformite demandeConformite) {
        demandeConformite.setDate(new Date());
        return demandeConformiteRepository.save(demandeConformite);
    }

    @Override
    public DemandeConformite getDemandeConformite(Long id) {
        return demandeConformiteRepository.findById(id).get();
    }

    @Override
    public DemandeConformite updateDemandeConformite(String status, String raison, Long id) {
        DemandeConformite demande = this.getDemandeConformite(id);
        demande.setDate(new Date());
        demande.setStatus(status);
        demande.setRaison(raison);
        return demande;
    }

    @Override
    public List<DemandeConformite> getAllDemandesConformite() {
        return demandeConformiteRepository.findAll();
    }
}
