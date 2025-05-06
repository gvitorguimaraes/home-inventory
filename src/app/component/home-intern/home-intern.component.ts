import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-intern',
  imports: [
    TopbarComponent,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './home-intern.component.html',
  styleUrl: './home-intern.component.css'
})
export class HomeInternComponent {

}
