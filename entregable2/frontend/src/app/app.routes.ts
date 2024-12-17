import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardnewuserComponent } from './components/dashboardnewuser/dashboardnewuser.component';
import { DashboardcensoComponent } from './components/dashboardcenso/dashboardcenso.component';
import { DashboardregistropersonaComponent } from './components/dashboardregistropersona/dashboardregistropersona.component';
import { DashboardfiltrarComponent } from './components/dashboardfiltrar/dashboardfiltrar.component';
import { DashboardregistrarviviendaComponent } from './components/dashboardregistrarvivienda/dashboardregistrarvivienda.component';
import { ResumenregsitroviviendaComponent } from './components/resumenregsitrovivienda/resumenregsitrovivienda.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'dashboardnu', component: DashboardnewuserComponent},
    {path:'dashboardcenso', component: DashboardcensoComponent},
    {path:'nuevapersona', component: DashboardregistropersonaComponent},
    {path:'consultar', component: DashboardfiltrarComponent},
    {path:'registrarvivienda', component: DashboardregistrarviviendaComponent},
    {path:'resumenvivienda', component: ResumenregsitroviviendaComponent},
];
