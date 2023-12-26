package me.haitammk.citoyenconnect.administrateur;

public interface AdministrateurService {

    Administrateur addAdministrateur(Administrateur admin);

    Administrateur updateAdministrateur(String password, String cin);

    Administrateur getAdministrateur(String cin);

    boolean administrateurAuthenticate(String cin, String password);
}