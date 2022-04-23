package com.integrador.angularspring.repositorio;

import com.integrador.angularspring.entidades.Persona;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepositorio extends JpaRepository<Persona, Long> {
    
}
