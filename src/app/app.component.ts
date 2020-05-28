import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from './services/habilidades.service';
import { ExperienciaService } from './services/experiencia.service';
import { Habilidad } from './interfaces/habilidad.interface';
import { Trabajo } from './interfaces/trabajo.interface';
import { Freelance } from './interfaces/freelance.interface';
import { Educacion } from './interfaces/educacion.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  habilidades: Habilidad[] = [];
  experienciaLaboral: Trabajo[] = [];
  freelances: Freelance[] = [];
  educacion: Educacion[] = [];

  constructor(
    private _habiliadesService: HabilidadesService,
    private _experienciaService: ExperienciaService) {

  }

  ngOnInit() {
    this.habilidades = this._habiliadesService.getHabilidades();
    this.experienciaLaboral = this._experienciaService.getExperienciaLaboral();
    this.freelances = this._experienciaService.getFreelances();
    this.educacion = this._experienciaService.getEducacion();
  }

}
