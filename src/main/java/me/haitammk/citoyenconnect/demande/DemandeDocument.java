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
import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.document.Document;
import me.haitammk.citoyenconnect.fonctionnaireArrondisement.FonctionnaireArrondisement;
import me.haitammk.citoyenconnect.fonctionnaireCommune.FonctionnaireCommune;

@Entity
@Table(name = "demande_document")
public class DemandeDocument {
    
    @ManyToOne
    @JoinColumn(referencedColumnName = "document_type", name = "document_type")
    private Document document;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_demandeDocument")
    private long id_demandeDocument;

    @Lob
    @Column(name= "carte_nationale", columnDefinition = "BLOB")
    private byte[] carte_nationale;

    @ManyToOne
	@JoinColumn(referencedColumnName = "id_citoyen", name = "id_citoyen")
    private Citoyen citoyen;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id_fonctionnaireArrondisement", name = "id_fonctionnaireArrondisement")
    private FonctionnaireArrondisement fonctionnaireArrondisement;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id_fonctionnaireCommune", name = "id_fonctionnaireCommune")
    private FonctionnaireCommune fonctionnaireCommune;
}
