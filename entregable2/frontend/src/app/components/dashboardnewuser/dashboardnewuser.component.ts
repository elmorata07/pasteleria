import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenulateralComponent } from '../menulateral/menulateral.component';
import { MenusuperiorComponent } from '../menusuperior/menusuperior.component';

@Component({
  selector: 'app-dashboardnewuser',
  standalone: true,
  imports: [
    RouterLink,
    MenulateralComponent,
    MenusuperiorComponent,
  ],
  templateUrl: './dashboardnewuser.component.html',
  styleUrl: './dashboardnewuser.component.css'
})
export class DashboardnewuserComponent {

}
