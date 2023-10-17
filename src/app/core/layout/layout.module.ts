import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    AppLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule,
  ],
  providers: []
})
export class LayoutModule {
}
