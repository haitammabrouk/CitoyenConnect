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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_inscription")
    private Long id;

    
    @Column(name = "cin", unique = true)
    private String cin;

    @Column(name = "status")
    private String status;

    
    @Column(name = "nom")
    private String nom;

    
    @Column(name = "prenom")
    private String prenom;


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

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "raison")
    private String raison;

    
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

    @Lob
    @Column(name = "personal_image", length = Integer.MAX_VALUE)
    private byte[] personal_image;

    @Lob
    @Column(name = "carte_national", length = Integer.MAX_VALUE)
    private byte[] carte_national;

    @Lob
    @Column(name = "signature", length = Integer.MAX_VALUE)
    private byte[] signature;

    @Column(name = "date")
    private Date date;
}
