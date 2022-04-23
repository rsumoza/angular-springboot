import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelos/persona';
import { ServicioPersonaService } from 'src/app/servicios/servicio-persona.service';

@Component({
  selector: 'app-mostrar-persona',
  templateUrl: './mostrar-persona.component.html',
  styleUrls: ['./mostrar-persona.component.css']
})
export class MostrarPersonaComponent implements OnInit {

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
          this.volver();
        },
        complete: () => console.info('Lista mostrada') 
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
