package me.haitammk.citoyenconnect.inscription;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "inscription")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Inscription {

    @Id
    @NotBlank
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_inscription")
    private Long id;

    @NotBlank
    @Column(name = "nom")
    private String nom;

    @NotBlank
    @Column(name = "prenom")
    private String prenom;

    @Email
    @NotBlank
    @Column(name = "email")
    private String email;

    @NotBlank
    @Column(name = "password")
    @Size(min = 8)
    private String password;

    @NotBlank
    @Column(name = "phone")
    private String phone ;

    @Column(name = "token")
    private String token;

    @Column(name = "expiry_token")
    private Date expiryToken;

    @NotBlank
    @Column(name = "situation_familiale")
    private String situationFamiliale;

    @NotBlank
    @Column(name = "date_naissance")
    private String dateNaissance;

    @NotBlank
    @Column(name = "lieu_naissance")
    private String lieuNaissance;

    @NotBlank
    @Column(name = "nationalite")
    private String nationalite;

    @NotBlank
    @Column(name = "cin_mere")
    private String cin_mere;

    @NotBlank
    @Column(name = "cin_pere")
    private String cin_pere;

    @NotBlank
    @Column(name = "nom_mere")
    private String nom_mere;

    @NotBlank
    @Column(name = "nom_pere")
    private String nom_pere;

    @NotBlank
    @Column(name = "prenom_mere")
    private String prenom_mere;

    @NotBlank
    @Column(name = "prenom_pere")
    private String prenom_pere;

    @NotBlank
    @Column(name = "sexe")
    private String sexe;

    @NotBlank
    @Column(name = "adresse")
    private String adresse;

    @Lob
    @Column(name = "personal_image", columnDefinition = "BLOB")
    private byte[] personal_image;

    @Lob
    @Column(name = "carte_national", columnDefinition = "BLOB")
    private byte[] carte_national;

    @Lob
    @Column(name = "signature", columnDefinition = "BLOB")
    private byte[] signature;

    @Column(name = "date")
    private Date date;
}
