import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPersonasComponent } from './componentes/listar-personas/listar-personas.component';
import { CrearPersonaComponent } from './componentes/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';
import { MostrarPersonaComponent } from './componentes/mostrar-persona/mostrar-persona.component';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent,
    CrearPersonaComponent,
    EditarPersonaComponent,
    MostrarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
