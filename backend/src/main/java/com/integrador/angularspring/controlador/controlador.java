package com.integrador.angularspring.controlador;

import java.util.List;

import com.integrador.angularspring.dto.Mensaje;
import com.integrador.angularspring.dto.PersonaDTO;
import com.integrador.angularspring.entidades.Persona;
import com.integrador.angularspring.servicios.PersonaServicios;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/persona")
@CrossOrigin(origins = "*")
public class controlador {

    
    @Autowired
    PersonaServicios perServicio;

    @GetMapping("/ver/personas")
    public ResponseEntity<List<Persona>> lista(){
        List<Persona> lista = perServicio.listado();
        return new ResponseEntity<List<Persona>>(lista, HttpStatus.OK);
    }

    @GetMapping("/obtener/persona/{id}")
    public ResponseEntity<?> buscarPersonId(@PathVariable Long id){
        if (!perServicio.existeId(id))
            return new ResponseEntity<Mensaje>(new Mensaje("Id No Existe"), HttpStatus.NOT_FOUND);
        Persona persona = perServicio.buscarPersonaId(id);
        return new ResponseEntity<Persona>(persona, HttpStatus.OK);
    }

    @PostMapping("/crear")
    public ResponseEntity<?> crearPersona(@RequestBody PersonaDTO personaDto) {
  
        if(StringUtils.isBlank(personaDto.getNombre()))
            return new ResponseEntity<Mensaje>(new Mensaje("El nombre es requerido"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(personaDto.getApellido()))
            return new ResponseEntity<Mensaje>(new Mensaje("El apellido es requerido"), HttpStatus.BAD_REQUEST);
        Persona persona = new Persona(personaDto.getNombre(),personaDto.getApellido());
        perServicio.crearPersona(persona);
        return new ResponseEntity<Mensaje>(new Mensaje("Persona creada"), HttpStatus.OK);
    }
    
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<?> actualizar(@PathVariable Long id, @RequestBody PersonaDTO personaDto){
        if (!perServicio.existeId(id))
            return new ResponseEntity<Mensaje>(new Mensaje("Id No Existe"), HttpStatus.NOT_FOUND);
        if(StringUtils.isBlank(personaDto.getNombre()))
            return new ResponseEntity<Mensaje>(new Mensaje("El nombre es requerido"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(personaDto.getApellido()))
            return new ResponseEntity<Mensaje>(new Mensaje("El apellido es requerido"), HttpStatus.BAD_REQUEST);
        Persona persona = perServicio.buscarPersonaId(id);
        persona.setNombre(personaDto.getNombre());
        persona.setApellido(personaDto.getApellido());
        perServicio.crearPersona(persona);
        return new ResponseEntity<Mensaje>(new Mensaje("Persona Actualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> borrado(@PathVariable Long id){
        if (!perServicio.existeId(id))
            return new ResponseEntity<Mensaje>(new Mensaje("Id No Existe"), HttpStatus.NOT_FOUND);
        perServicio.borrarPersona(id);
        return new ResponseEntity<Mensaje>(new Mensaje("Persona Borrada"), HttpStatus.OK);
    }


}
