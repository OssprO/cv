import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experiencia.service';
import { Habilidad } from './interfaces/habilidad.interface';
import { Trabajo } from './interfaces/trabajo.interface';
import { Freelance } from './interfaces/freelance.interface';
import { Educacion } from './interfaces/educacion.interface';
import { PersonalService } from './services/personal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public habilidades: Habilidad[] = [];
  public experienciaLaboral: Trabajo[] = [];
  public freelances: Freelance[] = [];
  public educacion: Educacion[] = [];
  public personal;

  constructor(
    private habiliadesService: HabilidadesService,
    private experienciaService: ExperienciaService,
    private personalService: PersonalService) {

  }

  ngOnInit() {
    this.habilidades = this.habiliadesService.getHabilidades();
    this.experienciaLaboral = this.experienciaService.getExperienciaLaboral();
    this.freelances = this.experienciaService.getFreelances();
    this.educacion = this.experienciaService.getEducacion();
    this.personal = this.personalService.getPersonalInfo();
  }

}
