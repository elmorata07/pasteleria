import { Component } from '@angular/core';
import {Router, RouterLink } from '@angular/router';
import { DashboardnewuserComponent } from '../dashboardnewuser/dashboardnewuser.component';
import { DashboardcensoComponent } from '../dashboardcenso/dashboardcenso.component';
import { DashboardfiltrarComponent } from '../dashboardfiltrar/dashboardfiltrar.component';
@Component({
  selector: 'app-menulateral',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './menulateral.component.html',
  styleUrl: './menulateral.component.css'
})
export class MenulateralComponent {

}
