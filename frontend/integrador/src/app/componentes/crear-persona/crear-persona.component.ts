import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelos/persona';
import { ServicioPersonaService } from 'src/app/servicios/servicio-persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  nombre = '';
  apellido = '';

  constructor(
    private personaServicio : ServicioPersonaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  crearPersona(): void {
    const persona = new Persona(this.nombre, this.apellido);
    this.personaServicio.crearPersona(persona).subscribe(
      {
        next: (data) => {this.toastr.success('Persona creada!', 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center'});
                        this.router.navigate(["/"]);
                        },
        error: (e) => {this.toastr.error(e.error.mensaje, 'Falla', {
                      timeOut: 3000, });
                      this.router.navigate(["/"]);
                      },
        complete: () => console.info('Persona creada') 
      }

    )

  }

}
