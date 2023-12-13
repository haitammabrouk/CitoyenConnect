package me.haitammk.citoyenconnect.document;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.demande.DemandeDocument;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "document")
public class Document {
    
    enum DocType {
        DECLARATION_HONNEUR,
        DECLARATION_DECES,
        DECLARATION_CELIBAT,
        AUTORISATION_CONSTRUCTION,
        ACTE_NAISSANCE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Enumerated(EnumType.STRING)
    @Column(name = "document_type")
    private DocType type;

    @OneToMany(mappedBy = "document")
    private List<DemandeDocument> demandesDocument;
}
