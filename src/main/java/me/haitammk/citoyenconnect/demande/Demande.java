package me.haitammk.citoyenconnect.demande;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
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
    @Column(name = "document", columnDefinition = "BLOB")
    private byte[] document;
}
