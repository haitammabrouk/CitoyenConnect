package me.haitammk.citoyenconnect.fonctionnaire;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.administrateur.AdministrateurArrondisement;
import me.haitammk.citoyenconnect.arrondisement.Arrondisement;

@Entity
@Table(name = "fonctionnaire_arrondisement")
public class FonctionnaireArrondisement extends Fonctionnaire {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_fonctionnaireArrondisement")
    private String id_fonctionnaireArrondisement;
    
    @ManyToOne
    @JoinColumn(referencedColumnName = "id_arrondisement", name = "id_arrondisement")
    private Arrondisement arrondisement;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id_administrateurArrondisement", name = "id_administrateurArrondisement")
    private AdministrateurArrondisement administrateurArrondisement;
}
