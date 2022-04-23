package com.integrador.angularspring.dto;

import javax.validation.constraints.NotBlank;

public class PersonaDTO {

    @NotBlank
    private String nombre;
    @NotBlank
    private String apellido;
    public PersonaDTO() {
    }
    public PersonaDTO(@NotBlank String nombre, @NotBlank String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    

}
