package me.haitammk.citoyenconnect.commune;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.administrateur.AdministrateurCommune;
import me.haitammk.citoyenconnect.arrondisement.Arrondisement;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "commune")
public class Commune {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_commune")
    private long id;

    @Column(name = "region") 
    private String region;

    @Column(name = "nom")
    private String nom;

    @OneToMany(mappedBy = "commune")
    private List<Arrondisement> arrondisements;

    @OneToOne(mappedBy = "commune", cascade = CascadeType.ALL)
    private AdministrateurCommune administrateurCommune;
}
