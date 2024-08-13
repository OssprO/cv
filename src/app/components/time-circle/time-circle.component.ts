import { Component, OnInit, ViewChild, ElementRef, Input, AfterContentInit } from '@angular/core';
import { Mathematical } from '../../classes/mathematical';
import { Educacion } from '../../interfaces/educacion.interface';
import { Trabajo } from '../../interfaces/trabajo.interface';
import { Freelance } from '../../interfaces/freelance.interface';

@Component({
  selector: 'cv-time-circle',
  templateUrl: './time-circle.component.html',
  styleUrls: ['./time-circle.component.scss']
})
export class TimeCircleComponent implements OnInit, AfterContentInit {

  @Input()
  public educacion: Educacion[];
  @Input()
  public experienciaLaboral: Trabajo[];
  @Input()
  public freelances: Freelance[];

  @ViewChild('TimeCircle', { static: true }) timeCircle: ElementRef;
  private timeCircleContext: CanvasRenderingContext2D;

  private GRADOS_APERTURA = 295;
  private CANVAS_SIZE = 800;
  private RADIO = this.CANVAS_SIZE / 2.075;
  private ADJUSTMENT = -40;

  protected initialYear = 2005; // TODO: Calculate this automatically
  protected finalYear = 2022; // TODO: Calculate this automatically
  protected difYears: number;
  protected gradosYear: number;


  constructor() { }

  ngOnInit() {
    this.timeCircleContext = (this.timeCircle.nativeElement as HTMLCanvasElement).getContext('2d');
    this.drawYearLines();
  }

  ngAfterContentInit(): void {
    for (const e of this.educacion) {
      this.drawArc( this.RADIO * 0.80, this.RADIO * 0.065, e.color, e.inicio, e.final );
    }
    for (const f of this.freelances) {
      this.drawArc( this.RADIO * 0.725, this.RADIO * 0.05, f.color, f.inicio, f.final );
    }
    for (const t of this.experienciaLaboral) {
      this.drawArc( this.RADIO * 0.90, this.RADIO * 0.10, t.color, t.inicio, t.final );
    }
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

  private drawArc( radio, grueso, color, inicio, final) {
    const difYears = this.finalYear - this.initialYear + 1;
    const gradosYear = this.GRADOS_APERTURA / difYears;
    const gradosMonth = gradosYear / 12;

    const inicioDate = new Date(inicio);
    const finalDate = new Date(final);

    const initialAngle = Mathematical.radians(
      gradosYear * (
        inicioDate.getFullYear() - this.initialYear
      ) + gradosMonth * ( inicioDate.getMonth() ) + this.ADJUSTMENT);
    const finalAngle =  Mathematical.radians(
      gradosYear * (
        finalDate.getFullYear() - this.initialYear
      ) + gradosMonth * ( finalDate.getMonth() ) + this.ADJUSTMENT);

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
}
