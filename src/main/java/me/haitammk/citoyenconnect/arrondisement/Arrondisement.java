package me.haitammk.citoyenconnect.arrondisement;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.administrateurArrondisement.AdministrateurArrondisement;
import me.haitammk.citoyenconnect.commune.Commune;
import me.haitammk.citoyenconnect.fonctionnaireArrondisement.FonctionnaireArrondisement;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "arrondisement")
public class Arrondisement {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_arrondisement")
    private long id_arrondisement;

    @Column(name = "adresse") 
    private String adresse;

    @Column(name = "nom")
    private String nom;

    @ManyToOne
	@JoinColumn(referencedColumnName = "id_commune", name = "id_commune")
    private Commune commune;

    @OneToOne(mappedBy = "arrondisement", cascade = CascadeType.ALL)
    private AdministrateurArrondisement administrateurArrondisement;

    @OneToMany(mappedBy = "arrondisement", cascade = CascadeType.ALL)
    private List<FonctionnaireArrondisement> fonctionnairesArrondisemnent;
}
