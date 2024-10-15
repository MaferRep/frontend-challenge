import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as Components from './components'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,  
    Components.CardComponent,
    Components.BackgroundComponent,
    Components.NavbarComponent,
    Components.FilterNavbarComponent,
    Components.FooterComponent,
    Components.PaginatorComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-challenge';
}
