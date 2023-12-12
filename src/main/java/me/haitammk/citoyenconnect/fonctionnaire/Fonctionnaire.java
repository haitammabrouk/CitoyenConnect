package me.haitammk.citoyenconnect.fonctionnaire;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import me.haitammk.citoyenconnect.personne.Personne;

public class Fonctionnaire extends Personne {
    
    @ColumnDefault("fonctionnaire")
    @Column(name = "grade")
    private String grade = "fonctionnaire";
}