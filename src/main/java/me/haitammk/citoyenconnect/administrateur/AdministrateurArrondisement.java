package me.haitammk.citoyenconnect.administrateur;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.arrondisement.Arrondisement;
import me.haitammk.citoyenconnect.fonctionnaire.FonctionnaireArrondisement;

@Entity
@Table(name = "administrateur_arrondisement")
public class AdministrateurArrondisement extends Administrateur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_administrateurArrondisement")
    private String id_administrateurArrondisement;

    @OneToOne
    @JoinColumn(referencedColumnName = "id_arrondisement", name = "id_arrondisement")
    private Arrondisement arrondisement;

    @OneToMany(mappedBy = "administrateurArrondisement")
    private List<FonctionnaireArrondisement> fonctionnairesArrondisement;

}
