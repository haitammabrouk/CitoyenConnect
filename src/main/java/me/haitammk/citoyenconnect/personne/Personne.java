package me.haitammk.citoyenconnect.personne;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Personne {
    
    @Id
    @NotBlank
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String cin;

    private
}
