package me.haitammk.citoyenconnect.citoyen;


import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.demande.Demande;
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

    @OneToMany(mappedBy = "citoyen")
    private List<Demande> demandes;
}