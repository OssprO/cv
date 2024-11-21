import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Profile } from '../interfaces/profile.inteface';
import { APISingleResponse } from '../interfaces/api.interface';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {}

  getProfile(language): Observable<Profile> {
    return this.httpClient.get<APISingleResponse<Profile>>(
      `${environment.apiUrl}/profile`, { 
        params: new HttpParams()
          .set('locale', language)
          .set('populate[0]', 'social')
          .set('populate[1]', 'languages')
        }
    ).pipe(
      shareReplay(),
      catchError(err => {
        const message = 'Could not load PROFILE';
        console.error(message, err);
        return throwError(() => new Error(err))
      }),
      map(profile => profile.data)
    )
  }
}
