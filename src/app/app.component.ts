import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experiencia.service';
import { PersonalService } from './services/personal.service';
import { combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public cvInfo$: Observable<any>;

  constructor(
    private habiliadesService: HabilidadesService,
    private experienciaService: ExperienciaService,
    private personalService: PersonalService) { }

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
      }))
    );
  }

}
