import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {


  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  user: any = localStorage.getItem('job-system-access-token');


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

  signIn(): void {
    this.router.navigate(['/auth'])
  }

  auth() {
    if (this.user) this.logout();
    else this.signIn();
  }
}
