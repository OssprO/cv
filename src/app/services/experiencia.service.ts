import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  
  constructor(private httpClient: HttpClient) {
    const loadedExperience$ = this.httpClient.get<Experiencia>('assets/data/experiencia.json')
      .pipe(
          shareReplay(),
          catchError(err => {
              const message = 'Could not load EXPERIENCIA';
              console.error(message, err);
              return throwError(err);
          }),
          tap(experience => this.subject.next(experience))
      );
    loadedExperience$.subscribe();
  }

  getExperiencia(): Observable<Experiencia> {
    return this.experience$.pipe(tap(console.log));
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
