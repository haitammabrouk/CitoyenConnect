package me.haitammk.citoyenconnect.citoyen;

import java.util.List;

import jakarta.persistence.CascadeType;
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

@Entity
@Table(name = "citoyen")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Citoyen extends Personne {
    
    @Column(name = "code_conf")
    private String code_conf;

    @OneToMany(mappedBy = "citoyen", cascade = CascadeType.ALL)
    private List<Demande> demandes;
}
