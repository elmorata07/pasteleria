import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenulateralComponent } from '../menulateral/menulateral.component';
import { MenusuperiorComponent } from '../menusuperior/menusuperior.component';
import { DashboardnewuserComponent } from '../dashboardnewuser/dashboardnewuser.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    MenulateralComponent,
    MenusuperiorComponent,
    DashboardnewuserComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
