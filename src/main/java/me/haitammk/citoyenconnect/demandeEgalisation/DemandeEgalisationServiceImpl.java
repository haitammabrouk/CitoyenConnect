package me.haitammk.citoyenconnect.demandeEgalisation;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.haitammk.citoyenconnect.inscription.Inscription;

@Service
public class DemandeEgalisationServiceImpl implements DemandeEgalisationService {
    
    @Autowired
    private DemandeEgalisationRepository demandeEgalisationRepository;
    
    @Override
    public DemandeEgalisation addDemandeEgalisation(DemandeEgalisation demande) {
        demande.setDate(new Date());
        return demandeEgalisationRepository.save(demande);
    }

    public DemandeEgalisation updateRaisonEgalisation(DemandeEgalisation inscription, String raison){
        inscription.setRaison(raison);
        return demandeEgalisationRepository.save(inscription);
    }

    @Override
    public DemandeEgalisation getDemandeEgalisation(Long id) {
        return demandeEgalisationRepository.findById(id).get();
    }

    public List<DemandeEgalisation> getEgalisationCours(){
        return demandeEgalisationRepository.findByStatus("en cours");
    }

    @Override
    public DemandeEgalisation updateDemandeEgalisation(DemandeEgalisation demande, Long id) {
        DemandeEgalisation dem = this.getDemandeEgalisation(id);
        dem.setDate(new Date());
        dem.setStatus(demande.getStatus());
        dem.setRaison(demande.getRaison());
        dem.setDocument(demande.getDocument());
        return demandeEgalisationRepository.save(dem);
    }

    @Override
    public DemandeEgalisation removeDemandeEgalisation(Long id) {
        DemandeEgalisation demande = this.getDemandeEgalisation(id);
        demandeEgalisationRepository.delete(demande);
        return demande;
    }

    @Override
    public List<DemandeEgalisation> getAllDemandesEgalisation() {
        return demandeEgalisationRepository.findAll();
    }
}
