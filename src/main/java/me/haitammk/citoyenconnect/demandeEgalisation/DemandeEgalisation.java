package me.haitammk.citoyenconnect.demandeEgalisation;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.demande.Demande;

@Entity
@Table(name = "demande_egalisation")
public class DemandeEgalisation extends Demande {
    
    @Lob
    @Column(name = "carte_national", columnDefinition= "BLOB")
    private byte[] carte_national;
}
