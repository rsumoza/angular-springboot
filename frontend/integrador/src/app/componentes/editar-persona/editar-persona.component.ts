import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelos/persona';
import { ServicioPersonaService } from 'src/app/servicios/servicio-persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  persona = new Persona('','');

  constructor(
    private personaServicio: ServicioPersonaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaServicio.mostrarPersona(id).subscribe(
      {
        next: (data) => this.persona = data,
        error: (e) => {
          this.toastr.error(e.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
          this.router.navigate(['/']);
        },
        complete: () => console.info('Persona actualizada') 
      }  
    );
  }

  actualizarPersona(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaServicio.actualizarPersona(id, this.persona).subscribe(
      {
        next: (data) => {this.toastr.success('Persona actualizada!', 'OK', {
                        timeOut: 3000, });
                        this.router.navigate(["/"]);
          },
        error: (e) => {this.toastr.error(e.error.mensaje, 'Falla', {
                      timeOut: 3000, });
                      this.router.navigate(["/"]);
        },
        complete: () => console.info('Persona actualizada') 
      }
    );
  }

}
