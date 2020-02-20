import { Injectable } from '@angular/core';
import { SuperAgent } from '../model/super-agent';
import { Applicant } from '../model/applicant';
import { Agent } from '../model/agent';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoged = false

  applicants: Applicant[] = [
    {
      "firstname": "superAgent1",
      "lastname": "superAgent1",
      "mail": "mail",
      "password": "password"
    },
    {
      "firstname": "superAgent2",
      "lastname": "superAgent2",
      "mail": "mail",
      "password": "password"
    },
    {
      "firstname": "superAgent3",
      "lastname": "superAgent3",
      "mail": "mail",
      "password": "password"
    }
  ]

  agents: Agent[] = [
    {
      "firstname": "superAgent1",
      "lastname": "superAgent1",
      "mail": "mail",
      "password": "password"
    },
    {
      "firstname": "superAgent2",
      "lastname": "superAgent2",
      "mail": "mail",
      "password": "password"
    },
    {
      "firstname": "superAgent3",
      "lastname": "superAgent3",
      "mail": "mail",
      "password": "password"
    }
  ]

  superAgents: SuperAgent[] = [
    {
      "firstname": "superAgent1",
      "lastname": "superAgent1",
      "mail": "mail",
      "password": "password"
    },
    {
      "firstname": "superAgent2",
      "lastname": "superAgent2",
      "mail": "mail",
      "password": "password"
    },
    {
      "firstname": "superAgent3",
      "lastname": "superAgent3",
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

  loginAgent(logedAgent: Agent) {
    var exist = false
    for (let agent of this.agents) {
      if (logedAgent.mail === agent.mail && logedAgent.password === agent.password) {
        exist = true
        break
      }
    }
    return exist
  }

  loginSuperAgent(logedSuperAgent: SuperAgent) {
    var exist = false
    for (let superAgent of this.superAgents) {
      if (logedSuperAgent.mail === superAgent.mail && logedSuperAgent.password === superAgent.password) {
        exist = true
        break
      }
    }
    return exist
  }
}
