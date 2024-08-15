import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Habilidad } from '../interfaces/habilidad.interface';

@Injectable()
export class HabilidadesService {

  private subject = new Subject<Habilidad[]>();
  private habilidades$: Observable<Habilidad[]> = this.subject.asObservable();
  
  constructor(
    private httpClient: HttpClient,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadHabilidades(event.lang);
    });
    this.loadHabilidades('es_MX');
  }

  private loadHabilidades(language: string): void {
    const filePath = `assets/data/habilidades-${language}.json`;

    this.httpClient.get<Habilidad[]>(filePath)
      .pipe(
        shareReplay(),
        catchError(err => {
          const message = 'Could not load HABILIADES';
          console.error(message, err);
          return throwError(err);
        }),
        tap(habilidades => this.subject.next(habilidades))
      )
      .subscribe();
  }

  getHabilidades(): Observable<Habilidad[]> {
    return this.habilidades$;
  }

}
