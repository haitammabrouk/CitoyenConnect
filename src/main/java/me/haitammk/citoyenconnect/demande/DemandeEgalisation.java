package me.haitammk.citoyenconnect.demande;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.fonctionnaireArrondisement.FonctionnaireArrondisement;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "demande_egalisation")
public class DemandeEgalisation {
    
    @Lob
    @Column(name= "document", columnDefinition = "BLOB")
    private byte[] document;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_demandeEgalisation")
    private long id_demandeEgalisation;

    @Lob
    @Column(name= "carte_nationale", columnDefinition = "BLOB")
    private byte[] carte_nationale;

    @ManyToOne
	@JoinColumn(referencedColumnName = "id_citoyen", name = "id_citoyen")
    private Citoyen citoyen;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id_fonctionnaireArrondisement", name = "id_fonctionnaireArrondisement")
    private FonctionnaireArrondisement fonctionnaireArrondisement;
}
