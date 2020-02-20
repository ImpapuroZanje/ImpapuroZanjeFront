import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Applicant } from 'src/app/model/applicant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  applicant: Applicant = {
    "firstname": "applicant2",
    "lastname": "applicant2",
    "mail": "mail",
    "password": "password"
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logIn() {
    console.log("In the login methode")
    if (this.loginService.login(this.applicant)) {
      this.loginService.isLoged = true
    }
  }
}
