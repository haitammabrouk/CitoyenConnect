package me.haitammk.citoyenconnect.demandeEgalisation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemandeEgalisationRepository extends JpaRepository<DemandeEgalisation, Long> {
    List<DemandeEgalisation> findByStatus(String status);
}
