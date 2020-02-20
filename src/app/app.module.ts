import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { TechnicalInformationComponent } from './component/technical-information/technical-information.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ApplicantHomeComponent } from './component/applicant/applicant-home/applicant-home.component';
import { AgentHomeComponent } from './component/agent/agent-home/agent-home.component';
import { SuperAgentHomeComponent } from './component/super-agent/super-agent-home/super-agent-home.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TechnicalInformationComponent,
    LoginComponent,
    ApplicantHomeComponent,
    AgentHomeComponent,
    SuperAgentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
