package me.haitammk.citoyenconnect.inscription;

import java.util.List;

public interface InscriptionService {
    
    Inscription addInscription(Inscription Inscription);

    Inscription updateInscription(Inscription inscription, Long id);

    Inscription getInscription(Long id);

    Inscription removeInscription(Long id);

    List<Inscription> getAllInscriptions();
}
