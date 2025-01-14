import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = 'MY TOKEN HMAAR';
  getToken(): string {
    return this.token;
  }
}
