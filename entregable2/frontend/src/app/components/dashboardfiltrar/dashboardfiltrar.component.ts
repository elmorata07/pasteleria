import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenulateralComponent } from '../menulateral/menulateral.component';
import { MenusuperiorComponent } from '../menusuperior/menusuperior.component';

@Component({
  selector: 'app-dashboardfiltrar',
  standalone: true,
  imports: [
    RouterLink,
    MenulateralComponent,
    MenusuperiorComponent
  ],
  templateUrl: './dashboardfiltrar.component.html',
  styleUrl: './dashboardfiltrar.component.css'
})
export class DashboardfiltrarComponent {

}
