import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiToken = process.env['API_TOKEN'] || '';

  getAPIToken(): string {
    return this.apiToken;
  }
}
