package me.haitammk.citoyenconnect.document;

import javax.print.Doc;

import org.hibernate.validator.constraints.EAN;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @Enumerated(EnumType.STRING)
    @Column(name = "document_type")
    private DocType type;

}
