package me.haitammk.citoyenconnect.fonctionnaire;

import java.util.List;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
import me.haitammk.citoyenconnect.demande.Demande;
import me.haitammk.citoyenconnect.personne.Personne;
import me.haitammk.citoyenconnect.reclamation.Reclamation;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Fonctionnaire extends Personne {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_fonctionnaire")
    private String id_fonctionnaire;
    
    @ColumnDefault("fonctionnaire")
    @Column(name = "grade")
    private String grade = "fonctionnaire";

    @OneToMany(mappedBy = "fonctionnaire")
    private List<Demande> demandes;

    @OneToMany(mappedBy = "fonctionnaire")
    private List<Reclamation> reclamations;
}