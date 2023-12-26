package me.haitammk.citoyenconnect.demandeEgalisation;

import java.util.Date;

import lombok.Data;

@Data
public class DemandeEgalisationDTO {

    private String prenom;
    private String nom;
    private Date date;
    private String email;
    private Long id;
    private byte[] document;
    private byte[] carte;
    
    public DemandeEgalisationDTO(DemandeEgalisation egalisation) {
        this.id = egalisation.getId();
        this.date = egalisation.getDate();
        this.document = egalisation.getDocument();
        this.carte = egalisation.getCarte_national();
        
        if(egalisation.getCitoyen() != null){
            this.nom = egalisation.getCitoyen().getNom();
            this.prenom = egalisation.getCitoyen().getPrenom();
            this.email = egalisation.getCitoyen().getEmail();
        }else{
            this.nom = "";
            this.prenom = "";
            this.email = "";
        }
    }

}
