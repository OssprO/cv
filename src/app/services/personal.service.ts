import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Personal } from '../interfaces/personal.inteface';

@Injectable()
export class PersonalService {

    private subject = new Subject<Personal>();
    private personal$: Observable<Personal> = this.subject.asObservable();
    
    constructor(private httpClient: HttpClient) {
        const loadedPersonal$ = this.httpClient.get<Personal>('assets/data/personal.json')
        .pipe(
            shareReplay(),
            catchError(err => {
                const message = 'Could not load EXPERIENCIA';
                console.error(message, err);
                return throwError(err);
            }),
            tap(personal => this.subject.next(personal))
        );
        loadedPersonal$.subscribe();
    }

    getPersonalInfo(): Observable<Personal> {
        return this.personal$;
    }

}
