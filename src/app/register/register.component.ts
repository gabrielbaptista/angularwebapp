import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private alertService: AlertsService) { }

  public ngOnInit() {
  }

  public onSubmit(f: NgForm) {
    if (f.valid) {
      this.userService.registerUser(f.value).subscribe({
        next: data => {
          this.router.navigateByUrl('/login');
          this.alertService.setMessage('Sucesso na criação - '+data.name,'success');
        },
        error: error => {
          this.alertService.setMessage(error.error,'error');
          console.error('There was an error!', error.error);
        }
      });
    }
  }
}
