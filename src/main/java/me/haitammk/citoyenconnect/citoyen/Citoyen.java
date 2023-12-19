package me.haitammk.citoyenconnect.citoyen;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.personne.Personne;

@Entity
@Table(name = "citoyen")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Citoyen extends Personne {
    
    @Column(name = "code_conf")
    private String code_conf;
}
