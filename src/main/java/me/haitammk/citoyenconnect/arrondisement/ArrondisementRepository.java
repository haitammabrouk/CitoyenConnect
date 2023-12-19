package me.haitammk.citoyenconnect.arrondisement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArrondisementRepository extends JpaRepository<Arrondisement, Long> {
}
