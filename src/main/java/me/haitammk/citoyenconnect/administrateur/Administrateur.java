package me.haitammk.citoyenconnect.administrateur;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import me.haitammk.citoyenconnect.personne.Personne;

@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Administrateur extends Personne {
    
    @ColumnDefault("administrateur")
    @Column(name = "grade")
    private String grade = "administrateur";
}
