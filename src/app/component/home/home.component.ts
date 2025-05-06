import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { HeroExternalComponent } from '../hero-external/hero-external.component';

@Component({
  selector: 'app-home',
  imports: [
    TopbarComponent, 
    HeroExternalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
