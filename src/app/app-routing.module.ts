import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TechnicalInformationComponent } from './component/technical-information/technical-information.component';
import { LoginComponent } from './component/login/login.component';
import { ApplicantHomeComponent } from './component/applicant/applicant-home/applicant-home.component';
import { AgentHomeComponent } from './component/agent/agent-home/agent-home.component';
import { SuperAgentHomeComponent } from './component/super-agent/super-agent-home/super-agent-home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login/:id',
    component: LoginComponent
  },
  {
    path: 'technicalInformation',
    component: TechnicalInformationComponent
  },
  {
    path: 'applicantHome',
    component: ApplicantHomeComponent
  },
  {
    path: 'agentHome',
    component: AgentHomeComponent
  },
  {
    path: 'superAgentHome',
    component: SuperAgentHomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
