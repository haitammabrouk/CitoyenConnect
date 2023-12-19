package me.haitammk.citoyenconnect.arrondisement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArrondisementServiceImpl implements ArrondisementService {
    
    @Autowired
    private ArrondisementRepository arrondisementRepository;

    @Override
    public Arrondisement addArrondisement(Arrondisement arrondisement) {
        return arrondisementRepository.save(arrondisement);
    }

    @Override
    public Arrondisement getArrondisement(Long id) {
        return arrondisementRepository.findById(id).get();
    }
}
