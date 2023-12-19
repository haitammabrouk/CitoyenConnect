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
    public DemandeConformite updateDemandeConformite(DemandeConformite demande, Long id) {
        DemandeConformite dem = this.getDemandeConformite(id);
        dem.setDate(new Date());
        dem.setStatus(demande.getStatus());
        dem.setRaison(demande.getRaison());
        dem.setDocument(demande.getDocument());
        return demandeConformiteRepository.save(dem);
    }

    @Override
    public DemandeConformite removeDemandeConformite(Long id) {
        DemandeConformite demandeConformite = this.getDemandeConformite(id);
        demandeConformiteRepository.delete(demandeConformite);
        return demandeConformite;
    }

    @Override
    public List<DemandeConformite> getAllDemandesConformite() {
        return demandeConformiteRepository.findAll();
    }
}
