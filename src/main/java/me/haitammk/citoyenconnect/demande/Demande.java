package me.haitammk.citoyenconnect.demande;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@MappedSuperclass
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Demande {
    
    @Id
    @Column(name = "id_demande")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "status")
    private String status;

    @Column(name = "raison")
    private String raison;

    @Column(name = "date")
    private Date date;

    @Lob
    @Column(name = "document", length = Integer.MAX_VALUE)
    private byte[] document;
}
