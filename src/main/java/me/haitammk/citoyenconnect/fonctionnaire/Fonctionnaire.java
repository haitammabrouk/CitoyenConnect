package me.haitammk.citoyenconnect.fonctionnaire;

import java.util.List;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
import me.haitammk.citoyenconnect.demande.Demande;
import me.haitammk.citoyenconnect.personne.Personne;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Fonctionnaire extends Personne {
    
    @ColumnDefault("fonctionnaire")
    @Column(name = "grade")
    private String grade = "fonctionnaire";

    @OneToMany(mappedBy = "fonctionnaire")
    private List<Demande> demandes;
}