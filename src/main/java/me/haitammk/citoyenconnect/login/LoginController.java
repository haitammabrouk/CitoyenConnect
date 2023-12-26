package me.haitammk.citoyenconnect.login;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import me.haitammk.citoyenconnect.administrateur.Administrateur;
import me.haitammk.citoyenconnect.administrateur.AdministrateurService;
import me.haitammk.citoyenconnect.administrateur.AdministrateurServiceImpl;
import me.haitammk.citoyenconnect.citoyen.Citoyen;
import me.haitammk.citoyenconnect.citoyen.CitoyenService;
import me.haitammk.citoyenconnect.citoyen.CitoyenServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class LoginController {

    @Autowired
    private CitoyenServiceImpl citoyenService;

    @Autowired
    private AdministrateurServiceImpl administrateurService;
    
    @PostMapping(value="/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> requestParams, HttpSession session){
        
        String cin = requestParams.get("cin");
        String password = requestParams.get("pwd");

        if(citoyenService.citoyenAuthenticate(cin, password)){
            Citoyen citoyen = citoyenService.getCitoyen(cin);

            session.setAttribute("sessionId", cin);

            Map<String, String> response = new HashMap<>();
            response.put("userType", "citoyen");
            response.put("sessionId", cin);

            return ResponseEntity.ok(response);

        }else if(administrateurService.administrateurAuthenticate(cin, password)){
            Administrateur admin = administrateurService.getAdministrateur(cin);

            session.setAttribute("sessionId", cin);

            Map<String, String> response = new HashMap<>();
            response.put("userType", "administrateur");
            response.put("sessionId", cin);

            return ResponseEntity.ok(response);
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }   
}
