package me.haitammk.citoyenconnect.administrateur;

public interface AdministrateurService {

    Administrateur addAdministrateur(Administrateur admin);

    Administrateur updateAdministrateur(Administrateur admin, String cin);

    Administrateur getAdministrateur(String cin);
}