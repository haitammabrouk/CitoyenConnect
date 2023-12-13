package me.haitammk.citoyenconnect.demande;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.fonctionnaire.Fonctionnaire;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Demande {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_demande")
    private long id;

    @Lob
    @Column(name= "carte_nationale", columnDefinition = "BLOB")
    private byte[] carte_nationale;

    @ManyToOne
	@JoinColumn(referencedColumnName = "cin", name = "cin")
    private Citoyen citoyen;

    @ManyToOne
    @JoinColumn(referencedColumnName = "cin", name = "cin")
    private Fonctionnaire fonctionnaire;

}
