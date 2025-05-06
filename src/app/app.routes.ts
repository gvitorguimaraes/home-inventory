import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HomeInternComponent } from './component/home-intern/home-intern.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeInternComponent }
];
