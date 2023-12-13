package me.haitammk.citoyenconnect.administrateur;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.arrondisement.Arrondisement;

@Entity
@Table(name = "administrateur_arrondisement")
public class AdministrateurArrondisement extends Administrateur {
    
    @OneToOne
    @JoinColumn(referencedColumnName = "id_arrondisement", name = "id_arrondisement")
    private Arrondisement arrondisement;
}
