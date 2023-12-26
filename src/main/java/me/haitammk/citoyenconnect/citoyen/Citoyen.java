package me.haitammk.citoyenconnect.citoyen;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.demandeConformite.DemandeConformite;
import me.haitammk.citoyenconnect.demandeEgalisation.DemandeEgalisation;
import me.haitammk.citoyenconnect.personne.Personne;

@Entity
@Table(name = "citoyen")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Citoyen extends Personne {
    
    @Column(name = "code_conf", unique = true)
    private String code_conf;

    @JsonIgnore
    @OneToMany(mappedBy = "citoyen", cascade = CascadeType.ALL)
    private List<DemandeEgalisation> demandes_egalisation;

    @JsonIgnore
    @OneToMany(mappedBy = "citoyen", cascade = CascadeType.ALL)
    private List<DemandeConformite> demandes_conformite;
}
