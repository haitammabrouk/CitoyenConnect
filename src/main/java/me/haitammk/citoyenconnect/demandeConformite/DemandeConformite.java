package me.haitammk.citoyenconnect.demandeConformite;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.demande.Demande;

@Entity
@Table(name = "demande_conformite")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class DemandeConformite extends Demande {

    @ManyToOne
    @JoinColumn(referencedColumnName = "cin")
    private Citoyen citoyen;
    
}
