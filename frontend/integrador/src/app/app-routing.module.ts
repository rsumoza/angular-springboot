import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './componentes/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';
import { ListarPersonasComponent } from './componentes/listar-personas/listar-personas.component';
import { MostrarPersonaComponent } from './componentes/mostrar-persona/mostrar-persona.component';

const routes: Routes = [
  {path: '', component: ListarPersonasComponent},
  {path: 'obtener/:id', component: MostrarPersonaComponent},
  {path: 'crear', component: CrearPersonaComponent},
  {path: 'actualizar/:id', component: EditarPersonaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
