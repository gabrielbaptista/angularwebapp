import { Component } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular Web App';
  constructor(messageService: TokenService, private router: Router) {
    if (!messageService.tokenAvailable()) {
      this.router.navigateByUrl('/login');
    }
  }
}
