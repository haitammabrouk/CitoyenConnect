package me.haitammk.citoyenconnect.administrateur;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.personne.Personne;

@Table
@Entity(name = "administrateur")
public class Administrateur extends Personne {
    
}
