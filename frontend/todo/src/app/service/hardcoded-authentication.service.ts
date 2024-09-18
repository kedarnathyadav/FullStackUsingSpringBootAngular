import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === 'in28minutes' && password === 'dummy') {
      if (this.isSessionStorageAvailable()) {
        sessionStorage.setItem('authenticateUser', username);
      }
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    if (this.isSessionStorageAvailable()) {
      let user = sessionStorage.getItem('authenticateUser');
      return !(user === null);
    }
    return false;
  }

  logout(): void {
    if (this.isSessionStorageAvailable()) {
      sessionStorage.removeItem('authenticateUser');
    }
  }

  // Check if sessionStorage is available
  private isSessionStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined';
  }
}
