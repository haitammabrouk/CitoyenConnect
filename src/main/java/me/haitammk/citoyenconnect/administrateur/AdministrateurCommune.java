package me.haitammk.citoyenconnect.administrateur;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.commune.Commune;
import me.haitammk.citoyenconnect.fonctionnaire.FonctionnaireCommune;

@Entity
@Table(name = "administrateur_commune")
public class AdministrateurCommune extends Administrateur {
    
    @OneToOne
    @JoinColumn(referencedColumnName = "id_commune", name = "id_commune")
    private Commune commune;

    @OneToMany(mappedBy = "administrateurCommune")
    private List<FonctionnaireCommune> fonctionnairesCommune;
}
