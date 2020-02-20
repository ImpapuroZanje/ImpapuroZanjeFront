import { Injectable } from '@angular/core';
import { Applicant } from '../model/applicant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoged = false

  applicants: Applicant[] = [
    {
      "firstname": "applicant1",
      "lastname": "applicant1",
      "mail": "mail",
      "password": "password"
    },
    {
      "firstname": "applicant2",
      "lastname": "applicant2",
      "mail": "mail",
      "password": "password"
    },
    {
      "firstname": "applicant3",
      "lastname": "applicant3",
      "mail": "mail",
      "password": "password"
    }
  ]
  constructor() { }

  login(logedApplicant: Applicant) {
    var exist = false
    for (let applicant of this.applicants) {
      if (logedApplicant.mail === applicant.mail && logedApplicant.password === applicant.password) {
        exist = true
        break
      }
    }
    return exist
  }
}
