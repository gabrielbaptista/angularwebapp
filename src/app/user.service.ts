import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  private URL(): string {
    return 'https://nodejs-api-mongo.azurewebsites.net';
  }

   public registerUser(user) {
    const api = this.URL() + '/api/users/register';
    const promise = new Promise((resolve, reject) => {
      this.http.post(api, user, {responseType: 'text'})
        .toPromise()
        .then(
          res => { // Success
           console.log(res);
           resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
