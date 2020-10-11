import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }
  public tokenAvailable(): boolean {
    return false;
  }
}

