package me.haitammk.citoyenconnect.fonctionnaire;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.administrateur.AdministrateurCommune;
import me.haitammk.citoyenconnect.commune.Commune;

@Entity
@Table(name = "fonctionnaire_commune")
public class FonctionnaireCommune extends Fonctionnaire {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_fonctionnaireCommune")
    private String id_fonctionnaireCommune;
    
    @ManyToOne
    @JoinColumn(referencedColumnName = "id_commune", name = "id_commune")
    private Commune commune;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id_administrateurCommune", name = "id_administrateurCommune")
    private AdministrateurCommune administrateurCommune;
}
