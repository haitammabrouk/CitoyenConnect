package me.haitammk.citoyenconnect.demandeEgalisation;

import java.util.List;

public interface DemandeEgalisationService {
    
    DemandeEgalisation addDemandeEgalisation(DemandeEgalisation demandeEgalisation);

    DemandeEgalisation updateDemandeEgalisation(String status, String raison, Long id);

    DemandeEgalisation getDemandeEgalisation(Long id);

    DemandeEgalisation removeDemandeEgalisation(Long id);

    List<DemandeEgalisation> getAllDemandesEgalisation();
}
