import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Auth} from "aws-amplify";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.scss']
})
export class AuthenticatorComponent implements OnInit {

  constructor(private router: Router, private amplifyService: AuthenticatorService) {
  }

  ngOnInit() {
    this.amplifyService.subscribe((response => {
      if (response.user && response.authStatus === 'authenticated') {
        this.router.navigate(['/dashboard'])
      }
    }))
  }
}
