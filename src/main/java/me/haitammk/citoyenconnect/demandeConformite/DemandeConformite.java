package me.haitammk.citoyenconnect.demandeConformite;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.demande.Demande;

@Entity
@Table(name = "demande_conformite")
public class DemandeConformite extends Demande {
    
}
