import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Education } from '../interfaces/education.interface';
import { Freelance } from '../interfaces/freelance.interface';
import { Job } from '../interfaces/job.interface';
import { environment } from '../../environments/environment';
import { APIResponse } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(private httpClient: HttpClient) {}

  public getJobs(language: string): Observable<Job[]> {
    return this.apiCall(language, 'jobs', 'projects');
  }

  public getEducacion(language: string): Observable<Education[]> {
    return this.apiCall(language, 'educations');
  }

  public getFreelances(language: string): Observable<Freelance[]> {
    return this.apiCall(language, 'freelances');
  }

  private apiCall(language: string, api: string, populate?: string): Observable<any> {
    let params = new HttpParams()
      .set('locale', language)
      .set('sort', 'end:desc');
    if (populate) {
      params = params.append('populate[0]', populate);
    }
    return this.httpClient.get<APIResponse<any>>(
      `${environment.apiUrl}/${api}`, 
      { params }
    ).pipe(
      shareReplay(),
      catchError(err => {
        const message = `Could not load \"${api}\" API`;
        console.error(message, err);
        return throwError(() => new Error(err));
      }),
      map(response => response.data)
    );
  }

}
