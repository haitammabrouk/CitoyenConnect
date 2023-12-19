package me.haitammk.citoyenconnect.demandeEgalisation;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemandeEgalisationServiceImpl implements DemandeEgalisationService {
    
    @Autowired
    private DemandeEgalisationRepository demandeEgalisationRepository;
    
    @Override
    public DemandeEgalisation addDemandeEgalisation(DemandeEgalisation demande) {
        demande.setDate(new Date());
        return demandeEgalisationRepository.save(demande);
    }

    @Override
    public DemandeEgalisation getDemandeEgalisation(Long id) {
        return demandeEgalisationRepository.findById(id).get();
    }

    @Override
    public DemandeEgalisation updateDemandeEgalisation(String status, String raison, Long id) {
        DemandeEgalisation demande = this.getDemandeEgalisation(id);
        demande.setDate(new Date());
        demande.setStatus(status);
        demande.setRaison(raison);
        return demande;
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
