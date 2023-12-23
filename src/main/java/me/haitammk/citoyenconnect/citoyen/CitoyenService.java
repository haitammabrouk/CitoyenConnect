package me.haitammk.citoyenconnect.citoyen;

import java.util.List;

public interface CitoyenService {
    
    Citoyen getCitoyen(String cin);

    Citoyen addCitoyen(Citoyen citoyen);

    Citoyen updateCitoyen(Citoyen citoyen, String cin);

    List<Citoyen> getAllCitoyens();

    Citoyen getCitoyenByCinAndCodeConf(String cin, String code_conf);

    Citoyen removeCitoyen(String cin);

    boolean citoyenAuthenticate(String cin, String password);
}
