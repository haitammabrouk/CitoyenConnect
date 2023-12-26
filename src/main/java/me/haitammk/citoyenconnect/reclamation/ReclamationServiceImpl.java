package me.haitammk.citoyenconnect.reclamation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReclamationServiceImpl implements ReclamationService {
    
    @Autowired
    private ReclamationRepository reclamationRepository;

    @Override
    public Reclamation addReclamation(Reclamation reclamation) {
        return reclamationRepository.save(reclamation);
    }

    @Override
    public Reclamation getReclamation(Long id) {
        return reclamationRepository.findById(id).get();
    }

    public List<Reclamation> getReclamationEnCours(){
        return reclamationRepository.findByStatus("en cours");
    }

    @Override
    public Reclamation removeReclamation(Long id) {
        Reclamation reclamation = this.getReclamation(id);
        reclamationRepository.delete(reclamation);
        return reclamation;
    }

    @Override
    public List<Reclamation> getAllReclamations() {
        return reclamationRepository.findAll();
    }
}
