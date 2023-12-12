package me.haitammk.citoyenconnect.administrateur;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Administrateur {
    
    @ColumnDefault("administrateur")
    @Column(name = "grade")
    private String grade = "administrateur";
}
