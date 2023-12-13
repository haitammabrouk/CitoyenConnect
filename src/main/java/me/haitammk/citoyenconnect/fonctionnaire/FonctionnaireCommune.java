package me.haitammk.citoyenconnect.fonctionnaire;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.commune.Commune;

@Entity
@Table(name = "fonctionnaire_commune")
public class FonctionnaireCommune extends Fonctionnaire {
    
    @ManyToOne
    @JoinColumn(referencedColumnName = "id_commune", name = "id_commune")
    private Commune commune;
}
