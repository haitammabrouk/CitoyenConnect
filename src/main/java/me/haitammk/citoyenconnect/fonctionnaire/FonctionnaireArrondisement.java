package me.haitammk.citoyenconnect.fonctionnaire;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.administrateur.AdministrateurArrondisement;
import me.haitammk.citoyenconnect.arrondisement.Arrondisement;

@Entity
@Table(name = "fonctionnaire_arrondisement")
public class FonctionnaireArrondisement extends Fonctionnaire {
    
    @ManyToOne
    @JoinColumn(referencedColumnName = "id_arrondisement", name = "id_arrondisement")
    private Arrondisement arrondisement;

    @ManyToOne
    @JoinColumn(referencedColumnName = "cin", name = "cin")
    private AdministrateurArrondisement administrateurArrondisement;
}
