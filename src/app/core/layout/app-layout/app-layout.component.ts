import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {Router} from "@angular/router";
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {


  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  isLoggedIn: boolean = false;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.authenticated();
  }

  logout(): void {
    Auth.signOut().then(result => {
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    })
  }

  signIn(): void {
    this.router.navigate(['/auth'])
  }

  auth() {
    if (this.isLoggedIn) this.logout();
    else this.signIn();
  }

  authenticated(): void {
    try {
      Auth.currentAuthenticatedUser().then(result => {
        this.isLoggedIn = true;
      });
    } catch {
      this.isLoggedIn = false;
    }
  }
}
