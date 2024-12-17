import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenulateralComponent } from '../menulateral/menulateral.component';
import { MenusuperiorComponent } from '../menusuperior/menusuperior.component';

@Component({
  selector: 'app-dashboardregistropersona',
  standalone: true,
  imports: [
    RouterLink,
    MenulateralComponent,
    MenusuperiorComponent
  ],
  templateUrl: './dashboardregistropersona.component.html',
  styleUrl: './dashboardregistropersona.component.css'
})
export class DashboardregistropersonaComponent {

}
