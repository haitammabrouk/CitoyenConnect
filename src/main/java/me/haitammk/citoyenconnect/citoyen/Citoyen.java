package me.haitammk.citoyenconnect.citoyen;


import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.demande.DemandeDocument;
import me.haitammk.citoyenconnect.demande.DemandeEgalisation;
import me.haitammk.citoyenconnect.demande.DemandeInscription;
import me.haitammk.citoyenconnect.demande.DemandeSignature;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "citoyen")
public class Citoyen {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_citoyen")
    private String id_citoyen;
    
    @Column(name = "access_code", unique = true)
    private String accessCode;

    @OneToMany(mappedBy = "citoyen")
    private List<DemandeDocument> demandes_documment;

    @OneToMany(mappedBy = "citoyen")
    private List<DemandeEgalisation> demandes_egalisation;

    @OneToMany(mappedBy = "citoyen")
    private List<DemandeInscription> demandes_inscriptions;

    @OneToMany(mappedBy = "citoyen")
    private List<DemandeSignature> demandes_signature;

    @NotBlank
    @Column(name = "nom")
    private String nom;
    
    @NotBlank
    @Column(name = "prenom")
    private String prenom;

    @NotBlank
    @Column(name = "email", unique = true)
    private String email;
    
    @NotBlank
    @Size(min = 8, message = "Password must be at least characters long")
    @Column(name = "password")
    private String password;

    @NotBlank
    @Column(name = "phone")
    private String phone;

    @Column(name = "token", unique = true)
    private String token;

    @Column(name = "expiry_token")
    private Date expiryToken;

    @NotBlank
    @Column(name = "lieu_naissance")
    private String lieuNaissance;

    @NotBlank
    @Column(name = "date_naissance")
    private Date dateNaissance;

    @NotBlank
    @Column(name = "nationalite")
    private String nationalite;

    @Lob
    @Column(name = "image", columnDefinition = "BLOB")
    private byte[] image;

    @Lob
    @Column(name = "carte_nationale", columnDefinition = "BLOB")
    private byte[] carteNationale;
}