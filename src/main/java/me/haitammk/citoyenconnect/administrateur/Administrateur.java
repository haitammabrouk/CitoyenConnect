package me.haitammk.citoyenconnect.administrateur;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.arrondisement.Arrondisement;
import me.haitammk.citoyenconnect.personne.Personne;

@Table(name = "administrateur")
@Entity
public class Administrateur extends Personne {
    
    @OneToOne
    @JoinColumn(referencedColumnName = "id_arrondisement")
    private Arrondisement arrondisement;

}
