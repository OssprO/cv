import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experiencia.service';
import { PersonalService } from './services/personal.service';

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
    bootstrap: [AppComponent],
    imports: [BrowserModule],
    providers: [
        HabilidadesService,
        ExperienciaService,
        PersonalService,
        HttpClient,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
