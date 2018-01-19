import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experiencia.service';

// Components
import { AppComponent } from './app.component';
import { TimeCircleComponent } from './components/time-circle/time-circle.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';

// Classes
//import { Mathematical } from './classes/mathematical';


@NgModule({
  declarations: [
    AppComponent,
    TimeCircleComponent,
    ExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HabilidadesService,
    ExperienciaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
