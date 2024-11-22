import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';;
import { Skill } from '../interfaces/profile.inteface';
import { APIResponse } from '../interfaces/api.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private httpClient: HttpClient) { }

  getSkills(language: string): Observable<Skill[]> {
    return this.httpClient.get<APIResponse<Skill>>(
      `${environment.apiUrl}/skills`, { 
        params: new HttpParams()
          .set('locale', language)
          .set('populate', 'skills.skills')
        }
    ).pipe(
      shareReplay(),
      catchError(err => {
        const message = 'Could not load Skills';
        console.error(message, err);
        return throwError(() => new Error(message));
      }),
      map(profile => profile.data)
    );
  }

}
