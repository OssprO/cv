import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Habilidad } from '../interfaces/habilidad.interface';

@Injectable()
export class HabilidadesService {

  private subject = new Subject<Habilidad[]>();
  private habilidades$: Observable<Habilidad[]> = this.subject.asObservable();
  
  constructor(private httpClient: HttpClient) {
    const loadedhabilidades$ = this.httpClient.get<Habilidad[]>('assets/data/habilidades.json')
      .pipe(
          shareReplay(),
          catchError(err => {
              const message = 'Could not load EXPERIENCIA';
              console.error(message, err);
              return throwError(err);
          }),
          tap(habilidades => this.subject.next(habilidades))
      );
    loadedhabilidades$.subscribe();
  }

  getHabilidades(): Observable<Habilidad[]> {
    return this.habilidades$;
  }

}
