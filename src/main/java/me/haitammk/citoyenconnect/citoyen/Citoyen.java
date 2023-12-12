package me.haitammk.citoyenconnect.citoyen;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.personne.Personne;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "citoyen")
public class Citoyen extends Personne {
    
    @Column(name = "access_code", unique = true)
    private String accessCode;
}