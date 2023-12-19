package me.haitammk.citoyenconnect.arrondisement;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "region")
    private String region;
}
