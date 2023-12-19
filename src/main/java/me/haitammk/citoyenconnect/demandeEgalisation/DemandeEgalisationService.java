package me.haitammk.citoyenconnect.demandeEgalisation;

import java.util.List;

public interface DemandeEgalisationService {
    
    DemandeEgalisation addDemandeEgalisation(DemandeEgalisation demandeEgalisation);

    DemandeEgalisation updateDemandeEgalisation(DemandeEgalisation demande, Long id);

    DemandeEgalisation getDemandeEgalisation(Long id);

    DemandeEgalisation removeDemandeEgalisation(Long id);

    List<DemandeEgalisation> getAllDemandesEgalisation();
}
