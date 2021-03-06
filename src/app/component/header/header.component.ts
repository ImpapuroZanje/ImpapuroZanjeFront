import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Applicant } from 'src/app/model/applicant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private loginService: LoginService, private router: Router) {
   }

  ngOnInit() {
  }

}
