package me.haitammk.citoyenconnect.demandeEgalisation;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.demande.Demande;

@Entity
@Table(name = "demande_egalisation")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DemandeEgalisation extends Demande {

    @ManyToOne
    @JoinColumn(referencedColumnName = "cin")
    private Citoyen citoyen;
    
    @Lob
    @Column(name = "carte_national", length = Integer.MAX_VALUE)
    private byte[] carte_national;
}
