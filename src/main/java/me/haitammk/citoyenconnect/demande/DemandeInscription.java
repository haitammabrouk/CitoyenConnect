package me.haitammk.citoyenconnect.demande;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
@Table(name = "demande_inscription")
public class DemandeInscription {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_demandeInscription")
    private long id_demandeInscription;

    @Lob
    @Column(name= "carte_nationale", columnDefinition = "BLOB")
    private byte[] carte_nationale;

    @ManyToOne
	@JoinColumn(referencedColumnName = "id_citoyen", name = "id_citoyen")
    private Citoyen citoyen;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id_fonctionnaireArrondisement", name = "id_fonctionnaireArrondisement")
    private FonctionnaireArrondisement fonctionnaireArrondisement;
    
    @NotBlank
    @Column(name = "cin")
    private String cin;

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
}
