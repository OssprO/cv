import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Personal } from '../interfaces/personal.inteface';

@Injectable()
export class PersonalService {

    private subject = new Subject<Personal>();
    private personal$: Observable<Personal> = this.subject.asObservable();
    
    constructor(
        private httpClient: HttpClient,
        private translate: TranslateService
    ) {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.loadPersonal(event.lang);
        });
        this.loadPersonal('es_MX');
    }

    private loadPersonal(language: string): void {
        const filePath = `assets/data/personal-${language}.json`;

    this.httpClient.get<Personal>(filePath)
      .pipe(
        shareReplay(),
        catchError(err => {
          const message = 'Could not load PERSONAL';
          console.error(message, err);
          return throwError(err);
        }),
        tap(personal => this.subject.next(personal))
      )
      .subscribe();
    }

    getPersonalInfo(): Observable<Personal> {
        return this.personal$;
    }

}
