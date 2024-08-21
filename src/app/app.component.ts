import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experiencia.service';
import { PersonalService } from './services/personal.service';
import { combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public cvInfo$: Observable<any>;
  public edad: number = Math.floor(
    (
      new Date().getTime() - new Date('1987-03-05').getTime()
    )/(
      1000 * 60 * 60 * 24 * 365.25
    ));

  public locale: string;

  constructor(
    private habiliadesService: HabilidadesService,
    private experienciaService: ExperienciaService,
    private personalService: PersonalService,
    private translate: TranslateService
  ) {
    this.locale = 'es_MX';
  }

  ngOnInit() {
    this.cvInfo$ = combineLatest([
      this.habiliadesService.getHabilidades(),
      this.experienciaService.getExperiencia(),
      this.personalService.getPersonalInfo()
    ]).pipe(
      map(([habilidades, experiencia, personal], index) => ({
        habilidades, 
        experienciaLaboral: experiencia.trabajo, 
        freelances: experiencia.freelance,
        educacion: experiencia.educacion,
        personal
      }))
    );

    this.translate.onLangChange
      .subscribe((langChangeEvent: LangChangeEvent) => {
          this.locale = langChangeEvent.lang;
      });
  }

  public downloadCV(): void {
    console.log('Descargar...');
  }

  public toggleLanguage(): void {
    if (this.translate.currentLang === 'en_US') {
      this.translate.use('es_MX');
    } else {
      this.translate.use('en_US');
    }
  }
}
