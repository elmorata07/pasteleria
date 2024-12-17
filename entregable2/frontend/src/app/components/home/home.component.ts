import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { NavabarComponent } from '../navabar/navabar.component';
import { VisionComponent } from '../vision/vision.component';
import { MisionComponent } from '../mision/mision.component';
import { Carrusel2Component } from '../carrusel2/carrusel2.component';
import { EducacionComponent } from '../educacion/educacion.component';
import { NumisakComponent } from '../numisak/numisak.component';
import { FooterComponent } from '../footer/footer.component';
import { SaludComponent } from '../salud/salud.component';
import { EventosComponent } from '../eventos/eventos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    CarruselComponent, 
    NavabarComponent, 
    MisionComponent, 
    VisionComponent,
    Carrusel2Component,
    EducacionComponent,
    NumisakComponent, 
    FooterComponent,
   SaludComponent,
   EventosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
