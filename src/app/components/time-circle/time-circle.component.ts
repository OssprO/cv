import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExperienciaService } from '../../services/experiencia.service';
import { Mathematical } from '../../modules/mathematical';

@Component({
  selector: 'time-circle',
  templateUrl: './time-circle.component.html',
  styleUrls: ['./time-circle.component.scss']
})
export class TimeCircleComponent implements OnInit {

  @ViewChild('TimeCircle') timeCircle: ElementRef;
  private timeCircleContext: CanvasRenderingContext2D;

  private GRADOS_APERTURA = 295; //DEGREES
  private CANVAS_SIZE = 800;
  private RADIO = this.CANVAS_SIZE / 2.075;
  private ADJUSTMENT = -40;

  protected initialYear = 2005;
  protected finalYear = 2019;
  protected difYears: number;
  protected gradosYear: number;

  private experiencia: any;

  constructor( private _experienciaService: ExperienciaService) { }

  ngOnInit() {
    this.timeCircleContext = (this.timeCircle.nativeElement as HTMLCanvasElement).getContext('2d');
    this.init();
  }

  init() {
    this.experiencia = this._experienciaService.getExperiencia();
    this.drawYearLines();
    this.parseData(this.experiencia);
  }

  private drawYearLines() {
    const difYears = this.finalYear - this.initialYear + 1;
    const gradosYear = this.GRADOS_APERTURA / difYears;
    let currentYear = this.initialYear;

    const lineLong = this.RADIO / 3;

    for ( let i = 0; i <= difYears; i++ ) {
      const angle = Mathematical.radians((gradosYear * i) + this.ADJUSTMENT);
      this.timeCircleContext.lineWidth = 1;
      this.timeCircleContext.beginPath();

      const x1 = (this.CANVAS_SIZE / 2) + Math.cos(angle) * (this.RADIO);
      const y1 = (this.CANVAS_SIZE / 2) + Math.sin(angle) * (this.RADIO);
      const x2 = (this.CANVAS_SIZE / 2) + Math.cos(angle) * (this.RADIO - (lineLong));
      const y2 = (this.CANVAS_SIZE / 2) + Math.sin(angle) * (this.RADIO - (lineLong));

      this.timeCircleContext.moveTo(x1, y1);
      this.timeCircleContext.lineTo(x2, y2);
      this.timeCircleContext.strokeStyle = '#D0D0D0';
      this.timeCircleContext.stroke();

      this.timeCircleContext.font = '38px';
      this.timeCircleContext.fillStyle = '#333333';
      this.timeCircleContext.fillText(currentYear.toString(), x1 - 5, y1);

      currentYear++;
    }
  }

  private parseData(data) {
    for (const educacion of this._experienciaService.getEducacion()) {
      this.drawArc( this.RADIO * 0.80, this.RADIO * 0.065, educacion.color, educacion.inicio, educacion.final );
    }
    for (const freelance of this._experienciaService.getFreelances()) {
      this.drawArc( this.RADIO * 0.725, this.RADIO * 0.05, freelance.color, freelance.inicio, freelance.final );
    }
    for (const trabajo of this._experienciaService.getExperienciaLaboral()) {
      this.drawArc( this.RADIO * 0.90, this.RADIO * 0.10, trabajo.color, trabajo.inicio, trabajo.final );
    }
  }

  private drawArc( radio, grueso, color, inicio, final) {
    const difYears = this.finalYear - this.initialYear + 1;
    const gradosYear = this.GRADOS_APERTURA / difYears;
    const gradosMonth = gradosYear / 12;

    const inicioDate = new Date(inicio);
    const finalDate = new Date(final);

    let initialAngle =  Mathematical.radians(gradosYear*(inicioDate.getFullYear()-this.initialYear) + gradosMonth*(inicioDate.getMonth()) + this.ADJUSTMENT);
    let finalAngle =  Mathematical.radians(gradosYear*(finalDate.getFullYear()-this.initialYear) + gradosMonth*(finalDate.getMonth()) + this.ADJUSTMENT);

    this.timeCircleContext.lineWidth = grueso;
    this.timeCircleContext.beginPath();
    this.timeCircleContext.arc(
      this.CANVAS_SIZE / 2,
      this.CANVAS_SIZE / 2,
      radio,
      initialAngle,
      finalAngle,
      false);
    this.timeCircleContext.strokeStyle = color;
    this.timeCircleContext.stroke();
  }

  // Converts from degrees to radians.
  public mathRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  // Converts from radians to degrees.
  public mathDegrees(radians) {
    return radians * 180 / Math.PI;
  }
}
