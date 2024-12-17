import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MenusuperiorComponent } from '../menusuperior/menusuperior.component';
import { MenulateralComponent } from '../menulateral/menulateral.component';

@Component({
  selector: 'app-dashboardcenso',
  standalone: true,
  imports: [
    RouterLink,
    MenusuperiorComponent,
    MenulateralComponent
  ],
  templateUrl: './dashboardcenso.component.html',
  styleUrl: './dashboardcenso.component.css'
})
export class DashboardcensoComponent {

}
