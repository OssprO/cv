import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiToken = environment.apiToken;

  getAPIToken(): string {
    return this.apiToken;
  }
}
