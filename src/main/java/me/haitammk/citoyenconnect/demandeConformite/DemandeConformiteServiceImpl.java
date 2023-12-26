package me.haitammk.citoyenconnect.demandeConformite;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.haitammk.citoyenconnect.demande.Demande;
import me.haitammk.citoyenconnect.demandeEgalisation.DemandeEgalisation;

@Service
public class DemandeConformiteServiceImpl implements DemandeConformiteService {

    @Autowired
    private DemandeConformiteRepository demandeConformiteRepository;

    public List<DemandeConformite> getConformiteEnCours(){
        return demandeConformiteRepository.findByStatus("en cours");
    }
    
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

    public DemandeConformite updateRaisonConformite(DemandeConformite inscription, String raison){
        inscription.setRaison(raison);
        return demandeConformiteRepository.save(inscription);
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
