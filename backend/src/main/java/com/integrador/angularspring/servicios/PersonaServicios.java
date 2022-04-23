package com.integrador.angularspring.servicios;

import java.util.List;

import com.integrador.angularspring.entidades.Persona;
import com.integrador.angularspring.repositorio.PersonaRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServicios {

    @Autowired
    PersonaRepositorio perRepo;

    public List<Persona> listado(){
        return perRepo.findAll();
    }

    public Persona buscarPersonaId(Long id){
        return perRepo.findById(id).orElse(null);
    }

    public void crearPersona(Persona persona){
        perRepo.save(persona);
    }

    public boolean existeId(Long id){
        return perRepo.existsById(id);
    }

    public void borrarPersona(Long id){
        perRepo.deleteById(id);
    }
    
}
