import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ServicioPersonaService } from 'src/app/servicios/servicio-persona.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

  personas : Persona[] = [];

  constructor(
    private personaServicio : ServicioPersonaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarPersonas();
  }

  listarPersonas(): void{
    this.personaServicio.lista().subscribe(
      {
        next: (data) => this.personas = data,
        error: (e) => console.error(e),
        complete: () => console.info('Lista mostrada') 
      }
    ) 
  }

  borrar(id: any) {
    this.personaServicio.borrarPersona(id).subscribe(
      {
      next: (data) => {
        this.toastr.success('Persona Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.listarPersonas();
      },
      error: (e) => {
        this.toastr.error(e.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      },
      complete: () => console.info('Lista mostrada') 
       }
    )
  }
}
