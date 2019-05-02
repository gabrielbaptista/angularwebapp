import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../user.service';
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
      this.userService.registerUser(f.value)
        .then( () => {
          this.router.navigateByUrl('/login');
          this.alertService.setMessage('Sucesso na criação','success');
        })
      .catch( (err) => {
        this.alertService.setMessage(err.error,'error');
        console.log(err.error);
      });
    }
  }
}
