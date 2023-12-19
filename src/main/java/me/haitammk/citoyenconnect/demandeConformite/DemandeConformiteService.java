package me.haitammk.citoyenconnect.demandeConformite;

import java.util.List;

public interface DemandeConformiteService {
    
    DemandeConformite addDemandeConformite(DemandeConformite demandeConformite);

    DemandeConformite updateDemandeConformite(DemandeConformite demande, Long id);

    DemandeConformite getDemandeConformite(Long id);

    DemandeConformite removeDemandeConformite(Long id);

    List<DemandeConformite> getAllDemandesConformite();
}
