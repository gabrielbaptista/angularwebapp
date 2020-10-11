import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  private URL(): string {
    return 'http://localhost:8080/';
  }

   public registerUser(user) {
    const api = this.URL() + 'api/users/register';
    return this.http.post<any>(api, user);
   }
}
