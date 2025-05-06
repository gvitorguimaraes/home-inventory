import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-external',
  imports: [
    MatButtonModule,
  ],
  templateUrl: './hero-external.component.html',
  styleUrl: './hero-external.component.css'
})
export class HeroExternalComponent {

  public constructor(private router: Router)
  {
    
  }

  public moveToHomeIntern()
  {
    this.router.navigate(['/home']);
  }
}
