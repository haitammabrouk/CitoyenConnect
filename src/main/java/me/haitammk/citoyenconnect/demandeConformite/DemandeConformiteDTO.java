package me.haitammk.citoyenconnect.demandeConformite;

import java.util.Date;

import lombok.Data;

@Data
public class DemandeConformiteDTO {

    private String prenom;
    private String nom;
    private Date date;
    private String email;
    private Long id;
    private byte[] document;

    
    public DemandeConformiteDTO(DemandeConformite conformite) {
        this.id = conformite.getId();
        this.date = conformite.getDate();
        this.document = conformite.getDocument();
        
        if(conformite.getCitoyen() != null){
            this.nom = conformite.getCitoyen().getNom();
            this.prenom = conformite.getCitoyen().getPrenom();
            this.email = conformite.getCitoyen().getEmail();
        }else{
            this.nom = "";
            this.prenom = "";
            this.email = "";
        }
    }

}
