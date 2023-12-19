package me.haitammk.citoyenconnect.arrondisement;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.administrateur.Administrateur;

@Entity
@Table(name = "arrondisement")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Builder
public class Arrondisement {
    
    @Id
    @Column(name = "id_arrondisement")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(mappedBy = "arrondisement", cascade = CascadeType.ALL)
    private Administrateur administrateur;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "region")
    private String region;
}
