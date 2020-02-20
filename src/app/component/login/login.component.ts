import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Applicant } from 'src/app/model/applicant';
import { Router, ActivatedRoute } from '@angular/router';
import { Agent } from 'src/app/model/agent';
import { SuperAgent } from 'src/app/model/super-agent';

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

  agent: Agent = {
    "firstname": "applicant2",
    "lastname": "applicant2",
    "mail": "mail",
    "password": "password"
  }

  superAgent: SuperAgent = {
    "firstname": "applicant2",
    "lastname": "applicant2",
    "mail": "mail",
    "password": "password"
  }

  logingType: string

  constructor(private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  logIn() {
    console.log("In the login methode")
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.logingType = params.get('id')
        this.logInAccordingToType()
      }
    );
  }

  logInAccordingToType() {
    console.log(this.logingType)
    switch(this.logingType) {
      case "applicant": {
        this.logInApplicant()
        break
      }
      case "agent": {
        this.logInAgent()
        break
      }
      case "superAgent": {
        this.logInSuperAgent()
        break
      }
    }
  }

  logInApplicant() {
    if (this.loginService.login(this.applicant)) {
      this.loginService.isLoged = true
      this.router.navigate(["/applicantHome"])
    }
  }

  logInSuperAgent() {
    if (this.loginService.loginSuperAgent(this.superAgent)) {
      this.loginService.isLoged = true
      this.router.navigate(["/superAgentHome"])
    }
  }

  logInAgent() {
    if (this.loginService.loginAgent(this.agent)) {
      this.loginService.isLoged = true
      this.router.navigate(["/agentHome"])
    }
  }

}
