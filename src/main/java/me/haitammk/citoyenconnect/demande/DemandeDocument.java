package me.haitammk.citoyenconnect.demande;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import me.haitammk.citoyenconnect.document.Document;

@Entity
@Table(name = "demande_document")
public class DemandeDocument extends Demande {
    
    @ManyToOne
    @JoinColumn(referencedColumnName = "document_type", name = "document_type")
    private Document document;
}
