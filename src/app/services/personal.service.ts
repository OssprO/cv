import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Profile } from '../interfaces/personal.inteface';
import { APISingleResponse } from '../interfaces/api.interface';
import { environment } from '../../environments/environment';
@Injectable()
export class PersonalService {

    private subject = new Subject<Profile>();
    private personal$: Observable<Profile> = this.subject.asObservable();
    
    constructor(
        private httpClient: HttpClient,
        private translate: TranslateService
    ) {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.loadProfile(event.lang);
        });
        this.loadProfile('es-MX');
    }

    private loadProfile(language: string): void {
      const apiPath = `${environment.apiUrl}/profile`;
      const params = new HttpParams()
        .set('locale', language)
        .set('populate[0]', 'social')
        .set('populate[1]', 'languages');

      this.httpClient.get<APISingleResponse<Profile>>(apiPath, { params })
        .pipe(
          shareReplay(),
          catchError(err => {
            const message = 'Could not load PROFILE';
            console.error(message, err);
            return throwError(err);
          }),
          map(personal => personal.data),
          tap(personal => this.subject.next(personal))
        )
        .subscribe();
    }

    getPersonalInfo(): Observable<Profile> {
        return this.personal$;
    }

}
