import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experience.service';
import { PersonalService } from './services/personal.service';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public cvInfo$: Observable<any>;
  public edad: any;
  public langList: string[] = ['es_MX', 'en_US'];

  public langSelectionForm = new FormGroup({
    language: new FormControl<string>('es_MX'),
});

  constructor(
    private habiliadesService: HabilidadesService,
    private experienciaService: ExperienciaService,
    private personalService: PersonalService,
    private translateService: TranslateService
  ) {
    this.translateService.addLangs(this.langList);
    this.translateService.setDefaultLang('es_MX');

    this.langSelectionForm.valueChanges.subscribe(form => {
      console.log('Form: ', form);
      this.translateService.use(form.language);
    })
  }

  ngOnInit() {
    this.cvInfo$ = combineLatest([
      this.habiliadesService.getHabilidades(),
      this.experienciaService.getExperienciaLaboral(),
      this.experienciaService.getFreelances(),
      this.experienciaService.getEducacion(),
      this.personalService.getPersonalInfo()
    ]).pipe(
      take(1),
      map(([habilidades, experienciaLaboral, freelances, educacion, personal], index) => ({
        habilidades, experienciaLaboral, freelances, educacion, personal
      })),
      tap((cv) => {
        const birth: any = new Date(cv.personal.nacimiento);
        const ageDifMilliseconds = Date.now() - birth;
        const ageDate = new Date(ageDifMilliseconds);
        this.edad = Math.abs(ageDate.getUTCFullYear() - 1970);
      })
    );
  }

}
