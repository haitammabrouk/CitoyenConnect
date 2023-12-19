package me.haitammk.citoyenconnect.administrateur;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.personne.Personne;

@Table(name = "administrateur")
@Entity
public class Administrateur extends Personne {
    
}
