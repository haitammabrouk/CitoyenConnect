package me.haitammk.citoyenconnect.personne;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@SuperBuilder
public class Personne {
    
    @Id
    @Column(name = "cin")
    private String cin;

    
    @Column(name = "nom")
    private String nom;

    
    @Column(name = "prenom")
    private String prenom;

    @Email
    
    @Column(name = "email")
    private String email;

    @Column(name = "password")
    @Size(min = 8)
    private String password;

    
    @Column(name = "phone")
    private String phone ;

    @Column(name = "token")
    private String token;

    @Column(name = "expiry_token")
    private Date expiryToken;

    
    @Column(name = "situation_familiale")
    private String situationFamiliale;

    
    @Column(name = "date_naissance")
    private String dateNaissance;

    
    @Column(name = "lieu_naissance")
    private String lieuNaissance;

    
    @Column(name = "nationalite")
    private String nationalite;

    
    @Column(name = "cin_mere")
    private String cin_mere;

    
    @Column(name = "cin_pere")
    private String cin_pere;

    
    @Column(name = "nom_mere")
    private String nom_mere;

    
    @Column(name = "nom_pere")
    private String nom_pere;

    
    @Column(name = "prenom_mere")
    private String prenom_mere;

    
    @Column(name = "prenom_pere")
    private String prenom_pere;

    
    @Column(name = "sexe")
    private String sexe;

    
    @Column(name = "adresse")
    private String adresse;

    @Lob
    @Column(name = "personal_image", length = Integer.MAX_VALUE)
    private byte[] personal_image;

    @Lob
    @Column(name = "carte_national", length = Integer.MAX_VALUE)
    private byte[] carte_national;

    @Lob
    @Column(name = "signature", columnDefinition = "BLOB")
    private byte[] signature;


}
