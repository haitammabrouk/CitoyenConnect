package me.haitammk.citoyenconnect.reclamation;

import java.util.List;

public interface ReclamationService {
    
    Reclamation addReclamation(Reclamation reclamation);

    Reclamation getReclamation(Long id);

    Reclamation removeReclamation(Long id);

    List<Reclamation> getAllReclamations();
}
