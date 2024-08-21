import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, pluck, shareReplay, tap } from 'rxjs/operators';
import { Educacion } from '../interfaces/educacion.interface';
import { Experiencia } from '../interfaces/experiencia.interface';
import { Freelance } from '../interfaces/freelance.interface';
import { Trabajo } from '../interfaces/trabajo.interface';

@Injectable()
export class ExperienciaService {

  private subject = new Subject<Experiencia>();
  private experience$: Observable<Experiencia> = this.subject.asObservable();
  
  constructor(
    private httpClient: HttpClient,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadExperience(event.lang);
    });
    this.loadExperience('es_MX');
  }

  private loadExperience(language: string): void {
    const filePath = `assets/data/experiencia-${language}.json`;

    this.httpClient.get<Experiencia>(filePath)
      .pipe(
        shareReplay(),
        catchError(err => {
          const message = 'Could not load EXPERIENCIA';
          console.error(message, err);
          return throwError(err);
        }),
        tap(experience => this.subject.next(experience))
      )
      .subscribe();
  }

  getExperiencia(): Observable<Experiencia> {
    return this.experience$;
  }

  getEducacion(): Observable<Educacion[]> {
    return this.experience$
      .pipe(
        pluck('educacion')
      );
  }

  getFreelances(): Observable<Freelance[]> {
    return this.experience$
      .pipe(
        pluck('freelance')
      );
  }

  getExperienciaLaboral(): Observable<Trabajo[]> {
    return this.experience$
      .pipe(
        pluck('trabajo')
      );
  }

}
