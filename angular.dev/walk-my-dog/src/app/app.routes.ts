import { Routes } from '@angular/router';
import { DogListComponent } from './dog-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogListComponent },
  { path: 'details/:index', loadComponent: () => import('./dog-view.component').then(m => m.DogViewComponent) },
];
