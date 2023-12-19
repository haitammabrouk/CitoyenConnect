package me.haitammk.citoyenconnect.demandeConformite;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemandeConformiteRepository extends JpaRepository<DemandeConformite, Long> {
    
}
