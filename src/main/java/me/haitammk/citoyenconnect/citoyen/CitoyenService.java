package me.haitammk.citoyenconnect.citoyen;

import java.util.List;

public interface CitoyenService {
    
    Citoyen getCitoyen(String cin);

    Citoyen addCitoyen(Citoyen citoyen);

    List<Citoyen> getAllCitoyens();

    Citoyen removeCitoyen(String cin);
}
