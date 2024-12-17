import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MenulateralComponent } from '../menulateral/menulateral.component';
import { MenusuperiorComponent } from '../menusuperior/menusuperior.component';

@Component({
  selector: 'app-dashboardregistrarvivienda',
  standalone: true,
  imports: [
    RouterLink,
    MenulateralComponent,
    MenusuperiorComponent
  ],
  templateUrl: './dashboardregistrarvivienda.component.html',
  styleUrl: './dashboardregistrarvivienda.component.css'
})
export class DashboardregistrarviviendaComponent {

}
