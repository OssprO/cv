import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experiencia.service';
import { PersonalService } from './services/personal.service';

import { AppComponent } from './app.component';
import { TimeCircleComponent } from './components/time-circle/time-circle.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({ 
    declarations: [
        AppComponent,
        TimeCircleComponent,
        ExperienciaComponent,
        EducacionComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        TranslateModule.forRoot({
            defaultLanguage: 'es_MX',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
    ],
    providers: [
        HabilidadesService,
        ExperienciaService,
        PersonalService,
        HttpClient,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
