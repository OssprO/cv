import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Services
import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experiencia.service';
import { PersonalService } from './services/personal.service';

// Components
import { AppComponent } from './app.component';
import { TimeCircleComponent } from './components/time-circle/time-circle.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeCircleComponent,
    ExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HabilidadesService,
    ExperienciaService,
    PersonalService,
    HttpClient
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
